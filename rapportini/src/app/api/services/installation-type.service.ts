/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddInstallationType } from '../models/add-installation-type';
import { InstallationTypeDto } from '../models/installation-type-dto';
import { InstallationTypeDtoBaseResult } from '../models/installation-type-dto-base-result';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateInstallationType } from '../models/update-installation-type';

@Injectable({
  providedIn: 'root',
})
export class InstallationTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiInstallationTypeGet
   */
  static readonly ApiInstallationTypeGetPath = '/api/installation/type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInstallationTypeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInstallationTypeGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<InstallationTypeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, InstallationTypeService.ApiInstallationTypeGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<InstallationTypeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInstallationTypeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInstallationTypeGet(params?: {

  }): Observable<Array<InstallationTypeDto>> {

    return this.apiInstallationTypeGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<InstallationTypeDto>>) => r.body as Array<InstallationTypeDto>)
    );
  }

  /**
   * Path part for operation apiInstallationTypePost
   */
  static readonly ApiInstallationTypePostPath = '/api/installation/type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInstallationTypePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInstallationTypePost$Response(params?: {
      body?: AddInstallationType
  }): Observable<StrictHttpResponse<InstallationTypeDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, InstallationTypeService.ApiInstallationTypePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InstallationTypeDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInstallationTypePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInstallationTypePost(params?: {
      body?: AddInstallationType
  }): Observable<InstallationTypeDtoBaseResult> {

    return this.apiInstallationTypePost$Response(params).pipe(
      map((r: StrictHttpResponse<InstallationTypeDtoBaseResult>) => r.body as InstallationTypeDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiInstallationTypeIdentityGet
   */
  static readonly ApiInstallationTypeIdentityGetPath = '/api/installation/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInstallationTypeIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInstallationTypeIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<InstallationTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, InstallationTypeService.ApiInstallationTypeIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InstallationTypeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInstallationTypeIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInstallationTypeIdentityGet(params: {
    identity: string;

  }): Observable<InstallationTypeDto> {

    return this.apiInstallationTypeIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<InstallationTypeDto>) => r.body as InstallationTypeDto)
    );
  }

  /**
   * Path part for operation apiInstallationTypeIdentityPut
   */
  static readonly ApiInstallationTypeIdentityPutPath = '/api/installation/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInstallationTypeIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInstallationTypeIdentityPut$Response(params: {
    identity: string;
      body?: UpdateInstallationType
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, InstallationTypeService.ApiInstallationTypeIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInstallationTypeIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInstallationTypeIdentityPut(params: {
    identity: string;
      body?: UpdateInstallationType
  }): Observable<StringBaseResult> {

    return this.apiInstallationTypeIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiInstallationTypeIdentityDelete
   */
  static readonly ApiInstallationTypeIdentityDeletePath = '/api/installation/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInstallationTypeIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInstallationTypeIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, InstallationTypeService.ApiInstallationTypeIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiInstallationTypeIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInstallationTypeIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiInstallationTypeIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
