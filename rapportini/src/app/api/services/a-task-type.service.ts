/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ATaskTypeDto } from '../models/a-task-type-dto';
import { ATaskTypeDtoBaseResult } from '../models/a-task-type-dto-base-result';
import { AddATaskType } from '../models/add-a-task-type';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateATaskType } from '../models/update-a-task-type';

@Injectable({
  providedIn: 'root',
})
export class ATaskTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTaskTypeGet
   */
  static readonly ApiTaskTypeGetPath = '/api/task/type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaskTypeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaskTypeGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ATaskTypeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ATaskTypeService.ApiTaskTypeGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ATaskTypeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTaskTypeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaskTypeGet(params?: {

  }): Observable<Array<ATaskTypeDto>> {

    return this.apiTaskTypeGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ATaskTypeDto>>) => r.body as Array<ATaskTypeDto>)
    );
  }

  /**
   * Path part for operation apiTaskTypePost
   */
  static readonly ApiTaskTypePostPath = '/api/task/type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaskTypePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTaskTypePost$Response(params?: {
      body?: AddATaskType
  }): Observable<StrictHttpResponse<ATaskTypeDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ATaskTypeService.ApiTaskTypePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ATaskTypeDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTaskTypePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTaskTypePost(params?: {
      body?: AddATaskType
  }): Observable<ATaskTypeDtoBaseResult> {

    return this.apiTaskTypePost$Response(params).pipe(
      map((r: StrictHttpResponse<ATaskTypeDtoBaseResult>) => r.body as ATaskTypeDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiTaskTypeIdentityGet
   */
  static readonly ApiTaskTypeIdentityGetPath = '/api/task/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaskTypeIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaskTypeIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ATaskTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, ATaskTypeService.ApiTaskTypeIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ATaskTypeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTaskTypeIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaskTypeIdentityGet(params: {
    identity: string;

  }): Observable<ATaskTypeDto> {

    return this.apiTaskTypeIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<ATaskTypeDto>) => r.body as ATaskTypeDto)
    );
  }

  /**
   * Path part for operation apiTaskTypeIdentityPut
   */
  static readonly ApiTaskTypeIdentityPutPath = '/api/task/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaskTypeIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTaskTypeIdentityPut$Response(params: {
    identity: string;
      body?: UpdateATaskType
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ATaskTypeService.ApiTaskTypeIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiTaskTypeIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTaskTypeIdentityPut(params: {
    identity: string;
      body?: UpdateATaskType
  }): Observable<StringBaseResult> {

    return this.apiTaskTypeIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiTaskTypeIdentityDelete
   */
  static readonly ApiTaskTypeIdentityDeletePath = '/api/task/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaskTypeIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaskTypeIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ATaskTypeService.ApiTaskTypeIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiTaskTypeIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaskTypeIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiTaskTypeIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
