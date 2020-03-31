/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddCompanyData } from '../models/add-company-data';
import { AddPersonData } from '../models/add-person-data';
import { StakeholderDto } from '../models/stakeholder-dto';
import { StringBaseResult } from '../models/string-base-result';

@Injectable({
  providedIn: 'root',
})
export class StakeholderUserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiStakeholderUserPersonDataGet
   */
  static readonly ApiStakeholderUserPersonDataGetPath = '/api/stakeholder/user/person-data';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderUserPersonDataGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderUserPersonDataGet$Response(params?: {

  }): Observable<StrictHttpResponse<StakeholderDto>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderUserService.ApiStakeholderUserPersonDataGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `apiStakeholderUserPersonDataGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderUserPersonDataGet(params?: {

  }): Observable<StakeholderDto> {

    return this.apiStakeholderUserPersonDataGet$Response(params).pipe(
      map((r: StrictHttpResponse<StakeholderDto>) => r.body as StakeholderDto)
    );
  }

  /**
   * Path part for operation apiStakeholderUserPersonDataPost
   */
  static readonly ApiStakeholderUserPersonDataPostPath = '/api/stakeholder/user/person-data';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderUserPersonDataPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderUserPersonDataPost$Response(params?: {
      body?: AddPersonData
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderUserService.ApiStakeholderUserPersonDataPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiStakeholderUserPersonDataPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderUserPersonDataPost(params?: {
      body?: AddPersonData
  }): Observable<StringBaseResult> {

    return this.apiStakeholderUserPersonDataPost$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiStakeholderUserCompanyDataGet
   */
  static readonly ApiStakeholderUserCompanyDataGetPath = '/api/stakeholder/user/company-data';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderUserCompanyDataGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderUserCompanyDataGet$Response(params?: {

  }): Observable<StrictHttpResponse<StakeholderDto>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderUserService.ApiStakeholderUserCompanyDataGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `apiStakeholderUserCompanyDataGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderUserCompanyDataGet(params?: {

  }): Observable<StakeholderDto> {

    return this.apiStakeholderUserCompanyDataGet$Response(params).pipe(
      map((r: StrictHttpResponse<StakeholderDto>) => r.body as StakeholderDto)
    );
  }

  /**
   * Path part for operation apiStakeholderUserCompanyDataPost
   */
  static readonly ApiStakeholderUserCompanyDataPostPath = '/api/stakeholder/user/company-data';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderUserCompanyDataPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderUserCompanyDataPost$Response(params?: {
      body?: AddCompanyData
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderUserService.ApiStakeholderUserCompanyDataPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiStakeholderUserCompanyDataPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderUserCompanyDataPost(params?: {
      body?: AddCompanyData
  }): Observable<StringBaseResult> {

    return this.apiStakeholderUserCompanyDataPost$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

}
