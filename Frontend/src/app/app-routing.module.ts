import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StayComponent } from './stay/stay.component';
import { StayDetailComponent } from './stay/stay-detail/stay-detail.component';
import { AttractionItemDetailComponent } from './stay/stay-list/attraction-item/attraction-item-detail/attraction-item-detail.component';



const routes: Routes=[
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'stay', component:StayComponent},
  {path: 'stayDetails', component:StayDetailComponent},
  {path: 'attractionDetail',component:AttractionItemDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
