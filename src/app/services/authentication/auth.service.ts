import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client'

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
    authority: 'https://authentication.gts.com/',
    client_id: 'SocialNetwork',
    redirect_uri: 'https://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'https://localhost:4200/signout-callback-oidc',
    response_type: "id_token token",
    scope: "openid profile socialNetwork.Profile",
    filterProtocolClaims: true,
    loadUserInfo: true
  };
}
