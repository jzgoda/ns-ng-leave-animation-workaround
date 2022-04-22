import { Component } from "@angular/core";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  show: boolean = false;

  tap(): void {
    this.show = !this.show;
  }
}
