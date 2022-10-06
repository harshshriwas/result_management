import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AddresultComponent } from './components/addresult/addresult.component';
import { SerchresultComponent } from './components/serchresult/serchresult.component';
import { ViewresultComponent } from './components/viewresult/viewresult.component';
import { EditresultComponent } from './components/editresult/editresult.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddresultComponent,
    SerchresultComponent,
    ViewresultComponent,
    EditresultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
