import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AntiqueService } from 'src/app/services/antique.service';
import { Antique } from '../models/antiques.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-antique',
  templateUrl: './antique-post.page.html',
  styleUrls: ['./antique-post.page.scss'],
})
export class AntiquePostPage implements OnInit {
  @Input() antique: Antique;
  isEditMode = false;
  form: FormGroup;

  constructor(private antiqueService: AntiqueService, private loadingCtrl: LoadingController,
    private modalCtrl: ModalController ) {}

  ngOnInit() {
    this.initPostAntiqueForm();

    if (this.antique) {
      this.isEditMode = true;
      this.setFormValues();
    }
  }

  initPostAntiqueForm(){
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      imageUrl: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    });
  }

  setFormValues(){
    this.form.setValue({
      name: this.antique.name,
      price: this.antique.price,
      description: this.antique.description,
      imageUrl: this.antique.imageUrl
    });
    this.form.updateValueAndValidity();
  }

  closeModal(data = null){
    this.modalCtrl.dismiss(data);
  }

  async submitAntique(){
    const loading = await this.loadingCtrl.create({message: 'Loading...'});
    loading.present();

    let response: Observable<Antique>;

    if(this.isEditMode){
      response = this.antiqueService.updateAntique(this.antique.id, this.form.value);
    } else {
     response = this.antiqueService.postAntique(this.form.value);
    }

    response.pipe(take(1))
    .subscribe((antique)=> {
      this.form.reset();
      loading.dismiss();

      if (this.isEditMode){
        this.closeModal(antique);
      }
    });
  }
}
