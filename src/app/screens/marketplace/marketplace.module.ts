import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketplacePageRoutingModule } from './marketplace-routing.module';

import { MarketplacePage } from './marketplace.page';
import { ModalsComponent } from 'src/app/component/modals/modals.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketplacePageRoutingModule
  ],
  declarations: [MarketplacePage, ModalsComponent],
  entryComponents: [ModalsComponent]
})
export class MarketplacePageModule {}
