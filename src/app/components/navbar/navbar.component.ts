import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.template.html"
})
export class NavbarComponent {
  items = ["Home", "Blog", "Register", "Twitter"];

  // onBrandClick() {
  //   console.log("brand clicked");
  // }
}
