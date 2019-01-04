import { Component } from '@angular/core';

@Component({
    selector: 'app-address-entity',
    templateUrl: './address-entity.component.html',
    styleUrls: ['./address-entity.component.css']
})

export class AddressEntityComponent {
    
    addressObj : any;

    onAddressSelect(event) {
        this.addressObj = event;
    }
}