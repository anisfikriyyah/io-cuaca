import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuacaPage } from './cuaca.page';

const routes: Routes = [
  {
    path: '',
    component: CuacaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuacaPageRoutingModule {}
