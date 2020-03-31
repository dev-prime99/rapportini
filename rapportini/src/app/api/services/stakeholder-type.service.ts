/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddStakeholderType } from '../models/add-stakeholder-type';
import { ObjectBaseResult } from '../models/object-base-result';
import { StakeholderTypeDto } from '../models/stakeholder-type-dto';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateStakeholderType } from '../models/update-stakeholder-type';

@Injectable({
  providedIn: 'root',
})
export class StakeholderTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiStakeholderTypeGet
   */
  static readonly ApiStakeholderTypeGetPath = '/api/stakeholder/type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderTypeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderTypeGet$Response(params?: {
    code?: string;
    description?: string;

  }): Observable<StrictHttpResponse<Array<StakeholderTypeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderTypeService.ApiStakeholderTypeGetPath, 'get');
    if (params) {

      rb.query('Code', params.code);
      rb.query('Description', params.description);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<StakeholderTypeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStakeholderTypeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderTypeGet(params?: {
    code?: string;
    description?: string;

  }): Observable<Array<StakeholderTypeDto>> {

    return this.apiStakeholderTypeGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<StakeholderTypeDto>>) => r.body as Array<StakeholderTypeDto>)
    );
  }

  /**
   * Path part for operation apiStakeholderTypePost
   */
  static readonly ApiStakeholderTypePostPath = '/api/stakeholder/type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderTypePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderTypePost$Response(params?: {
      body?: AddStakeholderType
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderTypeService.ApiStakeholderTypePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiStakeholderTypePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderTypePost(params?: {
      body?: AddStakeholderType
  }): Observable<StringBaseResult> {

    return this.apiStakeholderTypePost$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiStakeholderTypeIdentityGet
   */
  static readonly ApiStakeholderTypeIdentityGetPath = '/api/stakeholder/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderTypeIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderTypeIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<StakeholderTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderTypeService.ApiStakeholderTypeIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StakeholderTypeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStakeholderTypeIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderTypeIdentityGet(params: {
    identity: string;

  }): Observable<StakeholderTypeDto> {

    return this.apiStakeholderTypeIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<StakeholderTypeDto>) => r.body as StakeholderTypeDto)
    );
  }

  /**
   * Path part for operation apiStakeholderTypeIdentityPut
   */
  static readonly ApiStakeholderTypeIdentityPutPath = '/api/stakeholder/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderTypeIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderTypeIdentityPut$Response(params: {
    identity: string;
      body?: UpdateStakeholderType
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderTypeService.ApiStakeholderTypeIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiStakeholderTypeIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderTypeIdentityPut(params: {
    identity: string;
      body?: UpdateStakeholderType
  }): Observable<StringBaseResult> {

    return this.apiStakeholderTypeIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiStakeholderTypeIdentityDelete
   */
  static readonly ApiStakeholderTypeIdentityDeletePath = '/api/stakeholder/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderTypeIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderTypeIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderTypeService.ApiStakeholderTypeIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiStakeholderTypeIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderTypeIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiStakeholderTypeIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
