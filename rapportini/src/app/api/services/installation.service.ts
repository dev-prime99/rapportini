/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddInstallation } from '../models/add-installation';
import { InstallationDto } from '../models/installation-dto';
import { InstallationDtoBaseResult } from '../models/installation-dto-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateInstallation } from '../models/update-installation';

@Injectable({
  providedIn: 'root',
})
export class InstallationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiInstallationGet
   */
  static readonly ApiInstallationGetPath = '/api/installation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInstallationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInstallationGet$Response(params?: {
    code?: string;
    description?: string;
    province?: string;
    stakeholderIdentity?: string;
    stakeholderCode?: string;
    stakeholderName?: string;

  }): Observable<StrictHttpResponse<Array<InstallationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, InstallationService.ApiInstallationGetPath, 'get');
    if (params) {

      rb.query('Code', params.code);
      rb.query('Description', params.description);
      rb.query('Province', params.province);
      rb.query('StakeholderIdentity', params.stakeholderIdentity);
      rb.query('StakeholderCode', params.stakeholderCode);
      rb.query('StakeholderName', params.stakeholderName);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<InstallationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInstallationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInstallationGet(params?: {
    code?: string;
    description?: string;
    province?: string;
    stakeholderIdentity?: string;
    stakeholderCode?: string;
    stakeholderName?: string;

  }): Observable<Array<InstallationDto>> {

    return this.apiInstallationGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<InstallationDto>>) => r.body as Array<InstallationDto>)
    );
  }

  /**
   * Path part for operation apiInstallationPost
   */
  static readonly ApiInstallationPostPath = '/api/installation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInstallationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInstallationPost$Response(params?: {
      body?: AddInstallation
  }): Observable<StrictHttpResponse<InstallationDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, InstallationService.ApiInstallationPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InstallationDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInstallationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInstallationPost(params?: {
      body?: AddInstallation
  }): Observable<InstallationDtoBaseResult> {

    return this.apiInstallationPost$Response(params).pipe(
      map((r: StrictHttpResponse<InstallationDtoBaseResult>) => r.body as InstallationDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiInstallationIdentityGet
   */
  static readonly ApiInstallationIdentityGetPath = '/api/installation/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInstallationIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInstallationIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<InstallationDto>> {

    const rb = new RequestBuilder(this.rootUrl, InstallationService.ApiInstallationIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InstallationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInstallationIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInstallationIdentityGet(params: {
    identity: string;

  }): Observable<InstallationDto> {

    return this.apiInstallationIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<InstallationDto>) => r.body as InstallationDto)
    );
  }

  /**
   * Path part for operation apiInstallationIdentityPut
   */
  static readonly ApiInstallationIdentityPutPath = '/api/installation/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInstallationIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInstallationIdentityPut$Response(params: {
    identity: string;
      body?: UpdateInstallation
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, InstallationService.ApiInstallationIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInstallationIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInstallationIdentityPut(params: {
    identity: string;
      body?: UpdateInstallation
  }): Observable<StringBaseResult> {

    return this.apiInstallationIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

}
