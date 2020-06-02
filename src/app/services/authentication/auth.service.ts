import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client'
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private manager = new UserManager(getClientSettings());
  private user: User = null;

  constructor() {
    this.manager.getUser().then(user => {
      this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
    });
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
    authority: environment.authority,
    client_id: 'SocialNetwork',
    redirect_uri: environment.redirectUrl,
    post_logout_redirect_uri: environment.postLogoutUrl,
    response_type: "id_token token",
    scope: "openid profile socialNetwork.Profile socialNetwork.Status",
    filterProtocolClaims: true,
    loadUserInfo: true
  };
}
