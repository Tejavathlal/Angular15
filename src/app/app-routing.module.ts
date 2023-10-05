import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './Component/input/input.component';
import { AutocompleteComponent } from './Component/autocomplete/autocomplete.component';
import { HomeComponent } from './Component/home/home.component';
import { CardComponent } from './Component/card/card.component';
import { SliderComponent } from './Component/slider/slider.component';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { StudenttableComponent } from './Component/studenttable/studenttable.component';
import { CreatestudentComponent } from './Component/createstudent/createstudent.component';
import { PopupComponent } from './Component/popup/popup.component';
import { StudentdetailsComponent } from './Component/studentdetails/studentdetails.component';

const routes: Routes = [

 
  
  {path : 'login', component: LoginComponent},
  {path : "dashboard", component: DashboardComponent, children:[

  {path: "home", component: HomeComponent},
  {path: 'card', component: CardComponent},
  {path: 'slider', component: SliderComponent},
  {path: "input", component: InputComponent},
  {path: "autocomplete", component: AutocompleteComponent},
  {path: 'studenttable', component: StudenttableComponent},
  {path: 'createstudent', component: CreatestudentComponent},
  {path: 'studentdetails/:id', component:StudentdetailsComponent},
  {path: 'editdetails/:id', component: CreatestudentComponent},
  {path: 'popup', component: PopupComponent},
  {path: "editid", component: PopupComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
