import { Component } from "@angular/core";

@Component({
  selector: "app-brand",
  template: `
    <h1>Ng Learn</h1>
  `
})
export class BrandComponent {}

/*

    <h1 [class.foobar]="true" [class]="variable">title</h1>
    <h1 [ngClass]="{ foobar: true, baz: false }">title</h1>
    <h1 [class.foobar]="true">title</h1>
    <h1 [style.color]="'red'">title</h1>
    <h1 [style.fontSize.px]="12">title</h1>
    <h1 [style.fontSize.%]="200">title</h1>

*/
