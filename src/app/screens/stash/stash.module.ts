import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StashPageRoutingModule } from './stash-routing.module';

import { StashPage } from './stash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StashPageRoutingModule
  ],
  declarations: [StashPage]
})
export class StashPageModule {}
