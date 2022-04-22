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
      state("show", style({ opacity: 1 })),
      state("hide", style({ opacity: 0 })),
      transition("show => hide", [animate("250ms", style({ opacity: 0 }))]),
      transition("hide => show", [animate("250ms", style({ opacity: 1 }))]),
    ]),
  ],
})
export class AppComponent {
  show: boolean = false;

  tap(): void {
    this.show = !this.show;
  }
}
