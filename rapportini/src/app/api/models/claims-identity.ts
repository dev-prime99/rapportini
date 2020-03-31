/* tslint:disable */
import { Claim } from './claim';
export interface ClaimsIdentity {
  actor?: null | ClaimsIdentity;
  authenticationType?: null | string;
  bootstrapContext?: null | {  };
  claims?: null | Array<Claim>;
  isAuthenticated?: boolean;
  label?: null | string;
  name?: null | string;
  nameClaimType?: null | string;
  roleClaimType?: null | string;
}
