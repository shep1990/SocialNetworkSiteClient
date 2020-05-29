import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AuthService } from './services/authentication/auth.service';
import { AuthGuardService } from './services/authentication/auth-guard.service';
import { ErrorHandlerService } from './services/error-handling/error-handler.service';
import { ProfileService } from './services/profile/profile.service';
import { Profile } from './shared/profile';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';


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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    ProfileService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    },
    ErrorHandlerService,
    AuthGuardService,
    AuthService,
    Profile
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
