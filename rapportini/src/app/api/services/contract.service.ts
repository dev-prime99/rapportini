/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddContract } from '../models/add-contract';
import { ContractDto } from '../models/contract-dto';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateContract } from '../models/update-contract';

@Injectable({
  providedIn: 'root',
})
export class ContractService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiContractGet
   */
  static readonly ApiContractGetPath = '/api/contract';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContractGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContractGet$Response(params?: {
    code?: string;
    description?: string;
    typeIdentity?: string;
    stakeholderKind?: string;
    stakeholderIdentity?: string;
    stakeholderCode?: string;
    stakeholderName?: string;
    active?: boolean;
    expired?: boolean;
    expiring?: boolean;

  }): Observable<StrictHttpResponse<Array<ContractDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ContractService.ApiContractGetPath, 'get');
    if (params) {

      rb.query('Code', params.code);
      rb.query('Description', params.description);
      rb.query('TypeIdentity', params.typeIdentity);
      rb.query('StakeholderKind', params.stakeholderKind);
      rb.query('StakeholderIdentity', params.stakeholderIdentity);
      rb.query('StakeholderCode', params.stakeholderCode);
      rb.query('StakeholderName', params.stakeholderName);
      rb.query('Active', params.active);
      rb.query('Expired', params.expired);
      rb.query('Expiring', params.expiring);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ContractDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContractGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContractGet(params?: {
    code?: string;
    description?: string;
    typeIdentity?: string;
    stakeholderKind?: string;
    stakeholderIdentity?: string;
    stakeholderCode?: string;
    stakeholderName?: string;
    active?: boolean;
    expired?: boolean;
    expiring?: boolean;

  }): Observable<Array<ContractDto>> {

    return this.apiContractGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContractDto>>) => r.body as Array<ContractDto>)
    );
  }

  /**
   * Path part for operation apiContractPost
   */
  static readonly ApiContractPostPath = '/api/contract';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContractPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContractPost$Response(params?: {
      body?: AddContract
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ContractService.ApiContractPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StringBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContractPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContractPost(params?: {
      body?: AddContract
  }): Observable<StringBaseResult> {

    return this.apiContractPost$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiContractIdentityGet
   */
  static readonly ApiContractIdentityGetPath = '/api/contract/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContractIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContractIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ContractDto>> {

    const rb = new RequestBuilder(this.rootUrl, ContractService.ApiContractIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContractDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContractIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContractIdentityGet(params: {
    identity: string;

  }): Observable<ContractDto> {

    return this.apiContractIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<ContractDto>) => r.body as ContractDto)
    );
  }

  /**
   * Path part for operation apiContractIdentityPut
   */
  static readonly ApiContractIdentityPutPath = '/api/contract/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContractIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContractIdentityPut$Response(params: {
    identity: string;
      body?: UpdateContract
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ContractService.ApiContractIdentityPutPath, 'put');
    if (params) {

      rb.path('identity', params.identity);

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StringBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContractIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContractIdentityPut(params: {
    identity: string;
      body?: UpdateContract
  }): Observable<StringBaseResult> {

    return this.apiContractIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiContractIdentityDelete
   */
  static readonly ApiContractIdentityDeletePath = '/api/contract/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContractIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContractIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ContractService.ApiContractIdentityDeletePath, 'delete');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ObjectBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContractIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContractIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiContractIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
