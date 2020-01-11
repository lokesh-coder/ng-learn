import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-brand",
  template: `
    <h1 class="navbar-brand" (click)="onClick()">{{ title }}</h1>
  `
})
export class BrandComponent {
  @Input() title = "ng Learn";
  @Output() clicked = new EventEmitter();
  onClick() {
    this.clicked.emit(true);
  }
}
