/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddContractType } from '../models/add-contract-type';
import { ContractTypeDto } from '../models/contract-type-dto';
import { ContractTypeDtoBaseResult } from '../models/contract-type-dto-base-result';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateContractType } from '../models/update-contract-type';

@Injectable({
  providedIn: 'root',
})
export class ContractTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiContractTypeGet
   */
  static readonly ApiContractTypeGetPath = '/api/contract/type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContractTypeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContractTypeGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ContractTypeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ContractTypeService.ApiContractTypeGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ContractTypeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContractTypeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContractTypeGet(params?: {

  }): Observable<Array<ContractTypeDto>> {

    return this.apiContractTypeGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContractTypeDto>>) => r.body as Array<ContractTypeDto>)
    );
  }

  /**
   * Path part for operation apiContractTypePost
   */
  static readonly ApiContractTypePostPath = '/api/contract/type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContractTypePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContractTypePost$Response(params?: {
      body?: AddContractType
  }): Observable<StrictHttpResponse<ContractTypeDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ContractTypeService.ApiContractTypePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContractTypeDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContractTypePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContractTypePost(params?: {
      body?: AddContractType
  }): Observable<ContractTypeDtoBaseResult> {

    return this.apiContractTypePost$Response(params).pipe(
      map((r: StrictHttpResponse<ContractTypeDtoBaseResult>) => r.body as ContractTypeDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiContractTypeIdentityGet
   */
  static readonly ApiContractTypeIdentityGetPath = '/api/contract/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContractTypeIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContractTypeIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ContractTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, ContractTypeService.ApiContractTypeIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContractTypeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContractTypeIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContractTypeIdentityGet(params: {
    identity: string;

  }): Observable<ContractTypeDto> {

    return this.apiContractTypeIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<ContractTypeDto>) => r.body as ContractTypeDto)
    );
  }

  /**
   * Path part for operation apiContractTypeIdentityPut
   */
  static readonly ApiContractTypeIdentityPutPath = '/api/contract/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContractTypeIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContractTypeIdentityPut$Response(params: {
    identity: string;
      body?: UpdateContractType
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ContractTypeService.ApiContractTypeIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiContractTypeIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContractTypeIdentityPut(params: {
    identity: string;
      body?: UpdateContractType
  }): Observable<StringBaseResult> {

    return this.apiContractTypeIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiContractTypeIdentityDelete
   */
  static readonly ApiContractTypeIdentityDeletePath = '/api/contract/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContractTypeIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContractTypeIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ContractTypeService.ApiContractTypeIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiContractTypeIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContractTypeIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiContractTypeIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
