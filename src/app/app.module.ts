import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { jqxInputModule }    from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    jqxInputModule,
    jqxDropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
