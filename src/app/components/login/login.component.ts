import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.template.html"
})
export class LoginComponent {
  onLogin() {
    console.log("clicked login button");
  }
}
