import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntiquePostPage } from './antique-post.page';

const routes: Routes = [
  {
    path: '',
    component: AntiquePostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntiquePostPageRoutingModule {}
