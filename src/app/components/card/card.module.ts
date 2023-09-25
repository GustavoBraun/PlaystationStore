import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardComponent } from './card.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';



@NgModule({
  declarations: [
    CardComponent,
    CardLabelComponent,
    CardPricingComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
