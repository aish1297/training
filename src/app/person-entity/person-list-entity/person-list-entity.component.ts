import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-person-list-entity',
    templateUrl: './person-list-entity.component.html',
    styleUrls: ['./person-list-entity.component.css']
})

export class PersonListComponent implements OnInit {
    person: any;

    constructor(private httpClient: HttpClient) {

    }

    @Output()
    personSelected = new EventEmitter();

    ngOnInit() {
        this.httpClient.get('assets/person.json').subscribe(response => {
            this.person = response;
        this.personSelected.emit(this.person[0]);
        });
    }

    onEntitySelect(personData) {
        console.log(personData);
    }

    OnRowClick(personData: any) {
        this.personSelected.emit(personData);
    }
}
