import { Component } from '@angular/core';

@Component({
    selector: 'app-person-entity',
    templateUrl: './person-entity.component.html',
    styleUrls: ['./person-entity.component.css']
})

export class PersonEntityComponent {

    personObj: any;

    onPersonSelect(event) {
        this.personObj = event;
        console.log(this.personObj);
    }
}
