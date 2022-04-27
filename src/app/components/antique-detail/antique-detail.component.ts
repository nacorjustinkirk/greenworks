import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { AntiquePostPage } from 'src/app/antique-post/antique-post.page';
import { Antique } from 'src/app/models/antiques.model';
import { AntiqueService } from 'src/app/services/antique.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './antique-detail.component.html',
  styleUrls: ['./antique-detail.component.scss'],
})
export class AntiqueDetailComponent implements OnInit {
  @Input() antique: Antique;
  constructor(private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private antiqueService: AntiqueService) { }

  ngOnInit() {}

  closeModal(role = 'edit') {
    this.modalCtrl.dismiss(this.antique, role);
  }

  async onDeleteAntique(){
    const loading = await this.loadingCtrl.create({message: 'Deleting...'});
    loading.present();

    this.antiqueService
    .deleteAntique(this.antique.id)
    .pipe(take(1))
    .subscribe(() => {
      loading.dismiss();
      this.closeModal('delete');
    });
  }

  async openEditModal() {
    const modal = await this.modalCtrl.create({
      component: AntiquePostPage,
      componentProps: {antique: this.antique},
    });

    await modal.present();

    const { data: updateAntique } = await modal.onDidDismiss();
    if (updateAntique) {
      this.antique = updateAntique;
    }
  }
}
