/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ATaskDto } from '../models/a-task-dto';
import { ATaskDtoBaseResult } from '../models/a-task-dto-base-result';
import { AddATask } from '../models/add-a-task';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateATask } from '../models/update-a-task';

@Injectable({
  providedIn: 'root',
})
export class ATaskService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTaskGet
   */
  static readonly ApiTaskGetPath = '/api/task';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaskGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaskGet$Response(params?: {
    stakeholderKind?: string;
    stakeholderIdentity?: string;
    stakeholderCode?: string;
    stakeholderName?: string;
    typeIdentity?: string;
    description?: string;
    closed?: boolean;

  }): Observable<StrictHttpResponse<Array<ATaskDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ATaskService.ApiTaskGetPath, 'get');
    if (params) {

      rb.query('StakeholderKind', params.stakeholderKind);
      rb.query('StakeholderIdentity', params.stakeholderIdentity);
      rb.query('StakeholderCode', params.stakeholderCode);
      rb.query('StakeholderName', params.stakeholderName);
      rb.query('TypeIdentity', params.typeIdentity);
      rb.query('Description', params.description);
      rb.query('Closed', params.closed);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ATaskDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTaskGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaskGet(params?: {
    stakeholderKind?: string;
    stakeholderIdentity?: string;
    stakeholderCode?: string;
    stakeholderName?: string;
    typeIdentity?: string;
    description?: string;
    closed?: boolean;

  }): Observable<Array<ATaskDto>> {

    return this.apiTaskGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ATaskDto>>) => r.body as Array<ATaskDto>)
    );
  }

  /**
   * Path part for operation apiTaskPost
   */
  static readonly ApiTaskPostPath = '/api/task';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaskPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTaskPost$Response(params?: {
      body?: AddATask
  }): Observable<StrictHttpResponse<ATaskDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ATaskService.ApiTaskPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ATaskDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTaskPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTaskPost(params?: {
      body?: AddATask
  }): Observable<ATaskDtoBaseResult> {

    return this.apiTaskPost$Response(params).pipe(
      map((r: StrictHttpResponse<ATaskDtoBaseResult>) => r.body as ATaskDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiTaskIdentityGet
   */
  static readonly ApiTaskIdentityGetPath = '/api/task/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaskIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaskIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ATaskDto>> {

    const rb = new RequestBuilder(this.rootUrl, ATaskService.ApiTaskIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ATaskDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTaskIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaskIdentityGet(params: {
    identity: string;

  }): Observable<ATaskDto> {

    return this.apiTaskIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<ATaskDto>) => r.body as ATaskDto)
    );
  }

  /**
   * Path part for operation apiTaskIdentityPut
   */
  static readonly ApiTaskIdentityPutPath = '/api/task/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaskIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTaskIdentityPut$Response(params: {
    identity: string;
      body?: UpdateATask
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ATaskService.ApiTaskIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiTaskIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTaskIdentityPut(params: {
    identity: string;
      body?: UpdateATask
  }): Observable<StringBaseResult> {

    return this.apiTaskIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiTaskIdentityDelete
   */
  static readonly ApiTaskIdentityDeletePath = '/api/task/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaskIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaskIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ATaskService.ApiTaskIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiTaskIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaskIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiTaskIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
