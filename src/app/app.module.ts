import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastModule } from 'primeng/toast';

import { AuthService } from './services/authentication/auth.service';
import { AuthGuardService } from './services/authentication/auth-guard.service';
import { ErrorHandlerService } from './services/error-handling/error-handler.service';
import { ProfileService } from './services/profile/profile.service';
import { StatusService } from './services/status/status.service';
import { Profile } from './shared/profile';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InternalServerComponent } from './components/error-pages/internal-server/internal-server.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { StatusComponent } from './components/status/status.component';
import { JwtInterceptor } from './services/authentication/auth-handler';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    InternalServerComponent,
    AuthCallbackComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ToastModule,
    FormsModule
  ],
  providers: [
    ProfileService,
    StatusService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    ErrorHandlerService,
    Profile
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
