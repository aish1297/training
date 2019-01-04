import { Component, Input } from '@angular/core';
import { PersonInfoEntity } from './person-info-entity.model';

@Component({
    selector: 'app-person-info-entity',
    templateUrl: './person-info-entity.component.html',
    styleUrls: ['./person-info-entity.component.css']
})

export class PersonInfoComponent {



  personInfo = new PersonInfoEntity();

  @Input('personData')

  get personData() {
    return this.personVal;
  }

  personVal : any;
  set personData(personObj) {
    this.personVal = personObj;
    if (this.personVal) {
      console.log(this.personVal);
      console.log(personObj);
        this.personInfo.id = this.personVal.id;
        this.personInfo.firstname = this.personVal.firstname;
        this.personInfo.lastname = this.personVal.lastname;
        this.personInfo.email = this.personVal.email;
        this.personInfo.birth_date = this.personVal.birth_date;
        this.personInfo.created_date = this.personVal.created_date;
        this.personInfo.is_admin = this.personVal.is_admin;
        // console.log(this.personInfo);
    }
  }
}
