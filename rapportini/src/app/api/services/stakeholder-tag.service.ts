/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddStakeholderTag } from '../models/add-stakeholder-tag';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { TagDto } from '../models/tag-dto';
import { UpdateStakeholderTag } from '../models/update-stakeholder-tag';

@Injectable({
  providedIn: 'root',
})
export class StakeholderTagService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiStakeholderTagGet
   */
  static readonly ApiStakeholderTagGetPath = '/api/stakeholder/tag';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderTagGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderTagGet$Response(params?: {
    code?: string;
    description?: string;
    section?: string;
    group?: string;

  }): Observable<StrictHttpResponse<Array<TagDto>>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderTagService.ApiStakeholderTagGetPath, 'get');
    if (params) {

      rb.query('Code', params.code);
      rb.query('Description', params.description);
      rb.query('Section', params.section);
      rb.query('Group', params.group);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TagDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStakeholderTagGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderTagGet(params?: {
    code?: string;
    description?: string;
    section?: string;
    group?: string;

  }): Observable<Array<TagDto>> {

    return this.apiStakeholderTagGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TagDto>>) => r.body as Array<TagDto>)
    );
  }

  /**
   * Path part for operation apiStakeholderTagPost
   */
  static readonly ApiStakeholderTagPostPath = '/api/stakeholder/tag';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderTagPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderTagPost$Response(params?: {
      body?: AddStakeholderTag
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderTagService.ApiStakeholderTagPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiStakeholderTagPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderTagPost(params?: {
      body?: AddStakeholderTag
  }): Observable<StringBaseResult> {

    return this.apiStakeholderTagPost$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiStakeholderTagIdentityGet
   */
  static readonly ApiStakeholderTagIdentityGetPath = '/api/stakeholder/tag/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderTagIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderTagIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<TagDto>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderTagService.ApiStakeholderTagIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TagDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStakeholderTagIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderTagIdentityGet(params: {
    identity: string;

  }): Observable<TagDto> {

    return this.apiStakeholderTagIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<TagDto>) => r.body as TagDto)
    );
  }

  /**
   * Path part for operation apiStakeholderTagIdentityPut
   */
  static readonly ApiStakeholderTagIdentityPutPath = '/api/stakeholder/tag/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderTagIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderTagIdentityPut$Response(params: {
    identity: string;
      body?: UpdateStakeholderTag
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderTagService.ApiStakeholderTagIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiStakeholderTagIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderTagIdentityPut(params: {
    identity: string;
      body?: UpdateStakeholderTag
  }): Observable<StringBaseResult> {

    return this.apiStakeholderTagIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiStakeholderTagIdentityDelete
   */
  static readonly ApiStakeholderTagIdentityDeletePath = '/api/stakeholder/tag/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderTagIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderTagIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderTagService.ApiStakeholderTagIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiStakeholderTagIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderTagIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiStakeholderTagIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
