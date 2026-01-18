import { AuthConfig } from "angular-oauth2-oidc";

// export const authConfig: AuthConfig = {
//   issuer: 'http://localhost:7000',
//   redirectUri: window.location.origin + '/signin-oidc',
//   clientId: 'ca2a6862-48d3-4e6b-a906-8cb9fd096af6',
//   responseType: 'code',
//   postLogoutRedirectUri: window.location.origin + '/account/logout',
//   showDebugInformation: true,
//   strictDiscoveryDocumentValidation: false,
//   requireHttps: false,
//   // scope: 'openid profile'
// };

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:7000',
  redirectUri: window.location.origin + '/signin-oidc',
  clientId: 'ca2a6862-48d3-4e6b-a906-8cb9fd096af6',
  responseType: 'code', 
  postLogoutRedirectUri: window.location.origin + '/account/logout',
  showDebugInformation: true,
  requireHttps: false,
  tokenEndpoint: 'http://localhost:7000/oauth/token',
  userinfoEndpoint: 'http://localhost:7000/oauth/userinfo',
  logoutUrl: 'http://localhost:7000/account/logout',
  oidc: true,
};