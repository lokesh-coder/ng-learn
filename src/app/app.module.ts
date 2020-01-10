import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrandComponent } from "./components/brand.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [AppComponent, BrandComponent, NavbarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
