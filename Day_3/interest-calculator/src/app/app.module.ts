import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterestFormComponent } from './components/interest-form/interest-form.component';
import { InterestCalculatorComponent } from './components/interest-calculator/interest-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    InterestFormComponent,
    InterestCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
