import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { ShareModule } from 'src/app/modules/share/share.module';
import { MatRadioModule } from '@angular/material/radio';
import { CustomerCategoryCardComponent } from './components/customer-category-card/customer-category-card.component';
import { CustomerCategorySliderComponent } from './components/customer-category-slider/customer-category-slider.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListResultShuttleComponent } from './list-result-shuttle/list-result-shuttle.component';
import { CustomerTicketCardComponent } from './components/customer-ticket-card/customer-ticket-card.component';


@NgModule({
  declarations: [
    CustomerComponent,
    MainCarouselComponent,
    CustomerCategoryCardComponent,
    CustomerCategorySliderComponent,
    HomepageComponent,
    ListResultShuttleComponent,
    CustomerTicketCardComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ShareModule,
    MatRadioModule
  ]
})
export class CustomerModule { }
