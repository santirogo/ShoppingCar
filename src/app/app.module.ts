import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DeliveryAddressComponent } from './components/delivery-address/delivery-address.component';
import { HomeComponent } from './pages/home/home.component';
import { DeliveryFormComponent } from './components/delivery-address/delivery-form/delivery-form.component';
import {HttpClientModule} from '@angular/common/http';
import { ItemComponent } from './components/summary/item/item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'angular-custom-modal';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DeliveryAddressComponent,
    HomeComponent,
    DeliveryFormComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
