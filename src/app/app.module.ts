import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { BrandComponent } from "./components/brand.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { ToggleDirective } from "./Directive/toggle/toggle.directive";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./modules/profile/profile.module").then(m => m.ProfileModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    NavbarComponent,
    LoginComponent,
    ToggleDirective
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
