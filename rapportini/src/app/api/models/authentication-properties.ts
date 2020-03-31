/* tslint:disable */
export interface AuthenticationProperties {
  allowRefresh?: null | boolean;
  expiresUtc?: null | string;
  isPersistent?: boolean;
  issuedUtc?: null | string;
  items?: null | { [key: string]: string };
  parameters?: null | { [key: string]: {  } };
  redirectUri?: null | string;
}
