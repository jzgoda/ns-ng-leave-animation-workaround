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
  template: `<GridLayout rows="*, auto, auto" backgroundColor="#ffffff">
    <StackLayout row="0" rowSpan="3" verticalAlignment="center">
      <Button text="Tap Me" (tap)="show = !show" class="btn -primary"></Button>
    </StackLayout>
    <GridLayout
      row="1"
      class="notification"
      [@stateFade]="show ? 'show' : 'hide'"
    >
      <Label text="Hello!"></Label>
    </GridLayout>
  </GridLayout>`,
  styles: [
    "Button.-primary { font-size: 18; background-color: #0d2d6c; color: #ffffff; }",
    ".notification { color: #ffffff; font-size: 26; text-align: center; padding: 10; background-color: #0d2d6c; }",
  ],
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
}
