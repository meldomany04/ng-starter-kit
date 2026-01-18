import { AuthConfig } from "./auth-config";

export interface Environment {
  production: boolean;
  apiUrl: string;
  auth: AuthConfig;
  appVersion: string;
  debug: boolean;
}
