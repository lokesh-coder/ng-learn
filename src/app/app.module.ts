import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrandComponent } from "./components/brand.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  declarations: [AppComponent, BrandComponent, NavbarComponent, LoginComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
