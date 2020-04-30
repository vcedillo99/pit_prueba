import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PitPageRoutingModule } from './pit-routing.module';

import { PitPage } from './pit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PitPageRoutingModule
  ],
  declarations: [PitPage]
})
export class PitPageModule {}
