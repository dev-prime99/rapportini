/* tslint:disable */
import { ClaimsIdentity } from './claims-identity';
export interface Claim {
  issuer?: null | string;
  originalIssuer?: null | string;
  properties?: null | { [key: string]: string };
  subject?: null | ClaimsIdentity;
  type?: null | string;
  value?: null | string;
  valueType?: null | string;
}
