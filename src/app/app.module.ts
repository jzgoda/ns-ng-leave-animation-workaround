import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptAnimationsModule,
  NativeScriptModule,
} from "@nativescript/angular";

import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptAnimationsModule],
  declarations: [AppComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
