import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './login/pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  // ici on associe une chaine de caractères à une route
  // { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  // ici on associe une chaine de caractères à un composant
  // { path: 'sign-in', component: PageSignInComponent },
  // // créer 3 routes pour les autres composants
  // { path: 'sign-up', component: PageSignUpComponent },
  // { path: 'reset-password', component: PageResetPasswordComponent },
  // { path: 'forgot-password', component: PageForgotPasswordComponent },
  // lazy loading
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  // lazyloading pour clients
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  // lazyloading pour page-not-found
  // doit être déclaré en dernier !
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    // console.log(this.router.config, 'tableau de routes');
  }
}
