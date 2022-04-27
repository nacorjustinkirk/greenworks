import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AntiqueService } from '../services/antique.service';
import { Antique } from '../models/antiques.model';
import { AntiqueViewComponent } from '../components/antique-view/antique-view.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

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

  async openViewModal(antique: Antique) {
    const modal = await this.modalCtrl.create({
      component: AntiqueViewComponent,
      componentProps: { antique },
    });

    await modal.present();
  }
}
