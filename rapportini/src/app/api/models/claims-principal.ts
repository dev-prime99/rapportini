/* tslint:disable */
import { Claim } from './claim';
import { ClaimsIdentity } from './claims-identity';
import { IIdentity } from './i-identity';
export interface ClaimsPrincipal {
  claims?: null | Array<Claim>;
  identities?: null | Array<ClaimsIdentity>;
  identity?: null | IIdentity;
}
