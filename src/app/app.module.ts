import { NativeNotificationService } from './angular-notice';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [NativeNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
