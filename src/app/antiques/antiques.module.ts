import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntiquesPageRoutingModule } from './antiques-routing.module';

import { AntiquesPage } from './antiques.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntiquesPageRoutingModule,
  ],
  declarations: [AntiquesPage]
})
export class AntiquesPageModule {}
