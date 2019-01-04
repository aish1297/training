import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/app.component';
import { EntityComponent } from './entity/entity.component';
import { AddressEntityComponent } from './address-entity/address-entity.component';
import { AddressListComponent } from './address-entity/address-list-entity/address-list-entity.component';
import { AddressInfoComponent } from './address-entity/address-info-entity/address-info-entity.component';
import { PersonListComponent } from './person-entity/person-list-entity/person-list-entity.component';
import { PersonInfoComponent } from './person-entity/person-info-entity/person-info-entity.component';
import { PersonEntityComponent } from './person-entity/person-entity.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EntityComponent,
    AddressEntityComponent,
    AddressListComponent,
    PersonListComponent,
    AddressInfoComponent,
    PersonInfoComponent,
    PersonEntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
