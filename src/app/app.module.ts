import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './Material/angular-material/angular-material.module';
import { InputComponent } from './Component/input/input.component';
import { AutocompleteComponent } from './Component/autocomplete/autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { HomeComponent } from './Component/home/home.component';
import { CardComponent } from './Component/card/card.component';
import { SliderComponent } from './Component/slider/slider.component';
import { LoginComponent } from './Component/login/login.component';
import { StudenttableComponent } from './Component/studenttable/studenttable.component';
import { CreatestudentComponent } from './Component/createstudent/createstudent.component';
import { PopupComponent } from './Component/popup/popup.component';
import { StudentdetailsComponent } from './Component/studentdetails/studentdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutocompleteComponent,
    DashboardComponent,
    HomeComponent,
    CardComponent,
    SliderComponent,
    LoginComponent,
    StudenttableComponent,
    CreatestudentComponent,
    PopupComponent,
    StudentdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
