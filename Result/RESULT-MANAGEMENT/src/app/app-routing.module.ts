import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddresultComponent } from './components/addresult/addresult.component';
import { AuthguardGuard } from './components/Authguard/authguard.guard';
import { EditresultComponent } from './components/editresult/editresult.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SerchresultComponent } from './components/serchresult/serchresult.component';
import { StudentguardGuard } from './components/Studentguard/studentguard.guard';

const routes: Routes = [
  {path:"login", component:LoginComponent,pathMatch:"full"},
  {path:"register", component:RegisterComponent,pathMatch:"full"},
  {path:"home", component:HomeComponent,canActivate:[AuthguardGuard],pathMatch:"full"},
  {path:"addresult", component:AddresultComponent,canActivate:[AuthguardGuard],pathMatch:"full"},
  {path:"editresult/:id", component:EditresultComponent,canActivate:[AuthguardGuard],pathMatch:"full"},
  {path:"serchresult", component:SerchresultComponent,canActivate:[StudentguardGuard],pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
