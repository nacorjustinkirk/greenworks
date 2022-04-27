import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntiquePostPageRoutingModule } from './antique-post-routing.module';

import { AntiquePostPage } from './antique-post.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AntiquePostPageRoutingModule,
  ],
  declarations: [AntiquePostPage]
})
export class AntiquePostPageModule {}
