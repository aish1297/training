import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public entityChoosen: string;
  public isAddress: boolean;
  public isPerson: boolean;

  constructor() { }

  ngOnInit() {
    this.isPerson = true;
  }

  entitySelected(event) {
      this.entityChoosen = event;
      console.log(event);
      if (this.entityChoosen === 'address') {
          this.isAddress = true;
          this.isPerson = false;
      } else {
        this.isAddress = false;
        this.isPerson = true;
      }
  }
}
