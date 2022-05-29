import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmissionComponent } from './admission/admission.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'' , 
    redirectTo:'home' ,
    pathMatch:'full'
    
  },
 
  {
    path:'home',
    component : HomeComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent

  },
 
  {
    path:'admission',
    component : AdmissionComponent
  },
 
  
  {
    path:'admission_form',
    component:AdmissionFormComponent

  },
  {
    path:'**' , component:PagenotfoundComponent
  }

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
