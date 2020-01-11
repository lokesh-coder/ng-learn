import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.template.html"
})
export class LoginComponent {
  constructor(private router: Router) {}
  onLogin(e) {
    e.preventDefault();
    console.log("clicked login button");
    this.router.navigateByUrl("profile");
  }
}
