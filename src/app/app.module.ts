import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PropertyService } from './property.service';
import { PropertyComponent } from './property/property.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PropertyService,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
