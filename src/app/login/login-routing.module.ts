import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  // ici on associe une chaine de caractères à une route
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  // ici on associe une chaine de caractères à un composant
  { path: 'sign-in', component: PageSignInComponent },
  // // créer 3 routes pour les autres composants
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'reset-password', component: PageResetPasswordComponent },
  { path: 'forgot-password', component: PageForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
