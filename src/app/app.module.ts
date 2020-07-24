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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuthService } from './services/authentication/auth.service';
import { AuthGuardService } from './services/authentication/auth-guard.service';
import { ErrorHandlerService } from './services/error-handling/error-handler.service';
import { ProfileService } from './services/profile/profile.service';
import { StatusService } from './services/status/status.service';
import { FriendManagementService } from './services/friend/friend-management.service';
import { LoaderService } from './services/loader/loader.service';
import { Profile } from './shared/profile';
import { MessageService } from 'primeng/components/common/messageservice';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InternalServerComponent } from './components/error-pages/internal-server/internal-server.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { StatusComponent } from './components/status/status.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotificationComponent } from './components/notification/notification/notification.component';

import { LoaderInterceptor } from './interceptors/loader/loader.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler/error-handler.interceptor';
import { JwtInterceptor } from './interceptors/authentication/auth-handler';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    InternalServerComponent,
    AuthCallbackComponent,
    StatusComponent,
    LoaderComponent,
    NotificationComponent
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
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    ProfileService,
    StatusService,
    FriendManagementService, ,
    LoaderService,
    ErrorHandlerService,
    Profile,
    MessageService,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
