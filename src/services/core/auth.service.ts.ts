import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginInProgress = false;

  constructor(private oauthService: OAuthService, 
    private http: HttpClient,
    private environmentService: EnvironmentService) {
    this.oauthService.configure(environmentService.authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
  }

  async initLogin(): Promise<void> {
    if(!this.isLoggedIn){
      await this.oauthService.loadDiscoveryDocument();
      await this.oauthService.tryLoginCodeFlow();
    }
  }

  login() {
    if (this.isLoggedIn || this.loginInProgress) {
      return;
    }

    this.loginInProgress = true;
    this.oauthService.initCodeFlow();
  }


  async logout() {
    if(!this.isLoggedIn){
      return;
    }
    await this.oauthService.loadDiscoveryDocument();
    await this.oauthService.tryLoginCodeFlow();
    this.oauthService.logOut();
  }

  get isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }
}