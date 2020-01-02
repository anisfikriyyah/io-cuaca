import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuacaPageRoutingModule } from './cuaca-routing.module';

import { CuacaPage } from './cuaca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuacaPageRoutingModule
  ],
  declarations: [CuacaPage]
})
export class CuacaPageModule {}
