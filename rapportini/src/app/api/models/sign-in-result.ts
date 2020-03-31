/* tslint:disable */
import { AuthenticationProperties } from './authentication-properties';
import { ClaimsPrincipal } from './claims-principal';
export interface SignInResult {
  authenticationScheme?: null | string;
  principal?: null | ClaimsPrincipal;
  properties?: null | AuthenticationProperties;
}
