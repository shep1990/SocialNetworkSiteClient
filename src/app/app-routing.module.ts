import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { InternalServerComponent } from './components/error-pages/internal-server/internal-server.component';
import { AuthGuardService } from './services/authentication/auth-guard.service';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { StatusComponent } from './components/status/status.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'status',
    component: StatusComponent,
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
