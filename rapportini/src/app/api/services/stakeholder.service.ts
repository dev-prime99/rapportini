/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddStakeholder } from '../models/add-stakeholder';
import { ObjectBaseResult } from '../models/object-base-result';
import { StakeholderDto } from '../models/stakeholder-dto';
import { StakeholderShortDto } from '../models/stakeholder-short-dto';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateStakeholder } from '../models/update-stakeholder';

@Injectable({
  providedIn: 'root',
})
export class StakeholderService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiStakeholderGet
   */
  static readonly ApiStakeholderGetPath = '/api/stakeholder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderGet$Response(params?: {
    code?: string;
    name?: string;
    alias?: string;
    province?: string;
    cap?: string;
    city?: string;
    phone?: string;
    email?: string;
    hasTopCompany?: boolean;
    typeIdentity?: string;
    tagIdentity?: string;
    take?: number;
    skip?: number;

  }): Observable<StrictHttpResponse<Array<StakeholderShortDto>>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderService.ApiStakeholderGetPath, 'get');
    if (params) {

      rb.query('Code', params.code);
      rb.query('Name', params.name);
      rb.query('Alias', params.alias);
      rb.query('Province', params.province);
      rb.query('Cap', params.cap);
      rb.query('City', params.city);
      rb.query('Phone', params.phone);
      rb.query('Email', params.email);
      rb.query('HasTopCompany', params.hasTopCompany);
      rb.query('TypeIdentity', params.typeIdentity);
      rb.query('TagIdentity', params.tagIdentity);
      rb.query('Take', params.take);
      rb.query('Skip', params.skip);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<StakeholderShortDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStakeholderGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderGet(params?: {
    code?: string;
    name?: string;
    alias?: string;
    province?: string;
    cap?: string;
    city?: string;
    phone?: string;
    email?: string;
    hasTopCompany?: boolean;
    typeIdentity?: string;
    tagIdentity?: string;
    take?: number;
    skip?: number;

  }): Observable<Array<StakeholderShortDto>> {

    return this.apiStakeholderGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<StakeholderShortDto>>) => r.body as Array<StakeholderShortDto>)
    );
  }

  /**
   * Path part for operation apiStakeholderPost
   */
  static readonly ApiStakeholderPostPath = '/api/stakeholder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderPost$Response(params?: {
      body?: AddStakeholder
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderService.ApiStakeholderPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiStakeholderPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderPost(params?: {
      body?: AddStakeholder
  }): Observable<StringBaseResult> {

    return this.apiStakeholderPost$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiStakeholderIdentityGet
   */
  static readonly ApiStakeholderIdentityGetPath = '/api/stakeholder/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<StakeholderDto>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderService.ApiStakeholderIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StakeholderDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStakeholderIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderIdentityGet(params: {
    identity: string;

  }): Observable<StakeholderDto> {

    return this.apiStakeholderIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<StakeholderDto>) => r.body as StakeholderDto)
    );
  }

  /**
   * Path part for operation apiStakeholderIdentityPut
   */
  static readonly ApiStakeholderIdentityPutPath = '/api/stakeholder/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderIdentityPut$Response(params: {
    identity: string;
      body?: UpdateStakeholder
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderService.ApiStakeholderIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiStakeholderIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderIdentityPut(params: {
    identity: string;
      body?: UpdateStakeholder
  }): Observable<StringBaseResult> {

    return this.apiStakeholderIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiStakeholderIdentityDelete
   */
  static readonly ApiStakeholderIdentityDeletePath = '/api/stakeholder/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderService.ApiStakeholderIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiStakeholderIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiStakeholderIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
