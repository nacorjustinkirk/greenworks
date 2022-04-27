import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Antique } from 'src/app/models/antiques.model';
import { AntiqueService } from 'src/app/services/antique.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './antique-view.component.html',
  styleUrls: ['./antique-view.component.scss'],
})
export class AntiqueViewComponent implements OnInit {
  @Input() antique: Antique;
  constructor(private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private antiqueService: AntiqueService) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss(this.antique);
  }
}

