import { AuthConfig } from "@/models/core/auth-config";
import { Environment } from "@/models/core/environment";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private _environment: Environment = environment;

  get environment(): Environment {
    return this._environment;
  }

  get isProduction(): boolean {
    return this._environment.production;
  }

  get apiUrl(): string {
    return this._environment.apiUrl;
  }

  get authConfig(): AuthConfig {
    return {
      issuer: this._environment.auth.issuer,
      redirectUri: this._environment.auth.redirectUri,
      clientId: this._environment.auth.clientId,
      responseType: 'code',
      postLogoutRedirectUri: this._environment.auth.postLogoutRedirectUri,
      showDebugInformation: this._environment.auth.showDebugInformation,
      requireHttps: this._environment.auth.requireHttps,
      tokenEndpoint: this._environment.auth.tokenEndpoint,
      userinfoEndpoint: this._environment.auth.userinfoEndpoint,
      logoutUrl: this._environment.auth.logoutUrl,
      oidc: this._environment.auth.oidc
    };
  }
}
