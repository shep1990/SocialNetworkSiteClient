import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { AuthGuardService } from './services/authentication/auth-guard.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'error',
    component: InternalServerComponent
  },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
