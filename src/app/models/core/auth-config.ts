export interface AuthConfig {
  issuer: string;
  redirectUri: string;
  clientId: string;
  responseType: string;
  postLogoutRedirectUri?: string;
  showDebugInformation: boolean;
  requireHttps: boolean;
  tokenEndpoint?: string;
  userinfoEndpoint?: string;
  logoutUrl?: string;
  oidc?: boolean;
}
