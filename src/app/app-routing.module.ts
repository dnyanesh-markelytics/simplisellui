import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RouteGuard } from './auth/route.guard';

const routes: Routes = [
  {path:'',redirectTo:'products', pathMatch: 'full'},
  {path:'products',component:ProductComponent},
  {path:'login',component:SigninComponent,canActivate:[RouteGuard]},
  {path:'sign-up',component:SignupComponent},
  {
    path:"profile",
    loadChildren :() => import('./profile/profile.module').then(mod => mod.ProfileModule)
  },
  {path:'**',redirectTo:'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
