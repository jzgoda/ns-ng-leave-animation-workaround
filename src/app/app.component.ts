import {
  trigger,
  transition,
  style,
  animate,
  state,
} from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
  animations: [
    trigger("stateFade", [
      state("show", style({ opacity: 1, transform: "translateY(0)" })),
      state("hide", style({ opacity: 0, transform: "translateY(70)" })),
      transition("show => hide", [
        animate(
          "0.5s ease-in",
          style({ opacity: 0, transform: "translateY(70)" })
        ),
      ]),
      transition("hide => show", [
        animate(
          "0.5s ease-out",
          style({ opacity: 1, transform: "translateY(0)" })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  show: boolean = false;

  tap(): void {
    this.show = !this.show;
  }
}
