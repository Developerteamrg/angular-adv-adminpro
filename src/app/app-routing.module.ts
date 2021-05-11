import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';

/*import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
 import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
 */

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';


const routes: Routes =[
  //path: '/dashboard' PagesRputing
  //path: '/auth' AuthRouting
  //path: '/medicos' medicos routing
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, 
  {path: '**',component: NopagefoundComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
