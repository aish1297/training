import { Component, Input } from '@angular/core';
import { AddressInfoEntity } from './address-info-entity.model';

@Component({
    selector: 'app-address-info-entity',
    templateUrl: './address-info-entity.component.html',
    styleUrls: ['./address-info-entity.component.css']
})

export class AddressInfoComponent {

  @Input('addressData')

  addressInfo = new AddressInfoEntity();

  set addressData(addressObj) {
    if (addressObj) {
        this.addressInfo.id = addressObj.id;
        this.addressInfo.street = addressObj.street;
        this.addressInfo.city = addressObj.city;
        this.addressInfo.postalCode = addressObj.postalCode;
        // console.log(this.addressInfo);
    }
  }
}
