import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntiquesPage } from './antiques.page';

const routes: Routes = [
  {
    path: '',
    component: AntiquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntiquesPageRoutingModule {}
