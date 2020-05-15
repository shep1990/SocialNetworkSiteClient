import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileService } from './services/profile/profile.service';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { Router, RouterModule } from '@angular/router';
import { ErrorHandlerService } from './services/error-handling/error-handler.service';
import { AuthGuardService } from './services/authentication/auth-guard.service';
import { AuthService } from './services/authentication/auth.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { Profile } from './shared/profile';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    InternalServerComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProfileService,
    ErrorHandlerService,
    AuthGuardService,
    AuthService,
    Profile
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
