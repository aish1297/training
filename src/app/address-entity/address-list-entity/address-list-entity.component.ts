import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-address-list-entity',
    templateUrl: './address-list-entity.component.html',
    styleUrls: ['./address-list-entity.component.css']
})

export class AddressListComponent implements OnInit {
    address: any;

    constructor(private httpClient: HttpClient) {

    }

    @Output()
    addressSelected = new EventEmitter();

    ngOnInit() {
        this.httpClient.get('assets/address.json').subscribe(response => {
            this.address = response;
        this.addressSelected.emit(this.address[0]);
        });
    }

    onEntitySelect(addressData) {
        console.log(addressData);
    }

    OnRowClick(addressData: any) {
        console.log(addressData);
        this.addressSelected.emit(addressData);
    }

    onAddSelect(addressData: any) {
        // this.addressSelected.emit("");
    }
}
