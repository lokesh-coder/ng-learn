import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[togglePwd]"
})
export class ToggleDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener("click")
  onClick() {
    const inputEl = this.elRef.nativeElement.parentNode.parentNode.querySelector(
      "input"
    );

    const type = inputEl.getAttribute("type") === "text" ? "password" : "text";
    inputEl.setAttribute("type", type);
  }
}
