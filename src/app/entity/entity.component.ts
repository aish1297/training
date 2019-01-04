import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-entity',
    templateUrl: './entity.component.html',
    styleUrls: ['./entity.component.css']
})

export class EntityComponent {

  constructor() { }

  @Output()
  entitySelected = new EventEmitter();

  onEntitySelect(event) {
      this.entitySelected.emit(event.target.id);
  }
}
