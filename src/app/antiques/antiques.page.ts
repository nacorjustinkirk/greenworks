import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AntiqueService } from '../services/antique.service';
import { AntiqueDetailComponent } from '../components/antique-detail/antique-detail.component';
import { Antique } from '../models/antiques.model';

@Component({
  selector: 'app-antiques',
  templateUrl: './antiques.page.html',
  styleUrls: ['./antiques.page.scss'],
})
export class AntiquesPage implements OnInit {

  antiques$: Observable<Antique[]>;

  constructor(private antiqueService: AntiqueService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
    ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({message: 'Loading...'});
    loading.present();

    this.antiques$ = this.antiqueService.getAntiques().pipe(
      tap(antiques => {
        loading.dismiss();
        return antiques;
      })
    );
  }

  async openDetailModal(antique: Antique) {
    const modal = await this.modalCtrl.create({
      component: AntiqueDetailComponent,
      componentProps: { antique },
    });

    await modal.present();

    const { data: updatedAntique, role } = await modal.onDidDismiss();
    if (updatedAntique && role === 'edit') {
      this.antiques$ = this.antiques$.pipe(
        map((antiques) => {
          antiques.forEach(ant => {
            if (ant.id === updatedAntique.id) {
              ant = updatedAntique;
            }
            return ant;
          });
          return antiques;
        })
      );
    }

    if (role === 'delete') {
      this.antiques$ = this.antiques$.pipe(
        map((antiques) => {
          antiques.filter(ant => ant.id === updatedAntique.id);
          return antiques;
        })
      );
    }
  }
}
