import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';
import { authConfig } from 'src/auth.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginInProgress = false;

  constructor(private oauthService: OAuthService, private http: HttpClient) {
    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
  }

  async initLogin(): Promise<void> {
    if(!this.isLoggedIn){
      await this.oauthService.loadDiscoveryDocument();
      await this.oauthService.tryLoginCodeFlow();
    }
  }

  login() {
    if(this.isLoggedIn){
      return;
    }

    if (this.loginInProgress) {
      return;
    }
    
    this.loginInProgress = true;
    this.oauthService.initCodeFlow();
    
    this.loginInProgress = false;
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

  me(){
    this.http.get('https://localhost:7289/api/products/me' ).subscribe({});
  }
}