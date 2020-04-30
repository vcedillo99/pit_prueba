import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PitPage } from './pit.page';

const routes: Routes = [
  {
    path: '',
    component: PitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PitPageRoutingModule {}
