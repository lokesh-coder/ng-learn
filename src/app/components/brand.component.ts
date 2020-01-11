import { Component } from "@angular/core";

@Component({
  selector: "app-brand",
  template: `
    <h1 class="navbar-brand" [style.color]="'#333'">Ng Learn</h1>
  `
})
export class BrandComponent {}
