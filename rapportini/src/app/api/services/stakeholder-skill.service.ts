/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddSkill } from '../models/add-skill';
import { ObjectBaseResult } from '../models/object-base-result';
import { SkillDto } from '../models/skill-dto';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateSkill } from '../models/update-skill';

@Injectable({
  providedIn: 'root',
})
export class StakeholderSkillService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiStakeholderSkillGet
   */
  static readonly ApiStakeholderSkillGetPath = '/api/stakeholder/skill';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderSkillGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderSkillGet$Response(params?: {
    code?: string;
    description?: string;

  }): Observable<StrictHttpResponse<Array<SkillDto>>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderSkillService.ApiStakeholderSkillGetPath, 'get');
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
        return r as StrictHttpResponse<Array<SkillDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStakeholderSkillGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderSkillGet(params?: {
    code?: string;
    description?: string;

  }): Observable<Array<SkillDto>> {

    return this.apiStakeholderSkillGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SkillDto>>) => r.body as Array<SkillDto>)
    );
  }

  /**
   * Path part for operation apiStakeholderSkillPost
   */
  static readonly ApiStakeholderSkillPostPath = '/api/stakeholder/skill';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderSkillPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderSkillPost$Response(params?: {
      body?: AddSkill
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderSkillService.ApiStakeholderSkillPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiStakeholderSkillPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderSkillPost(params?: {
      body?: AddSkill
  }): Observable<StringBaseResult> {

    return this.apiStakeholderSkillPost$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiStakeholderSkillIdentityGet
   */
  static readonly ApiStakeholderSkillIdentityGetPath = '/api/stakeholder/skill/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderSkillIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderSkillIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<SkillDto>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderSkillService.ApiStakeholderSkillIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SkillDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStakeholderSkillIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderSkillIdentityGet(params: {
    identity: string;

  }): Observable<SkillDto> {

    return this.apiStakeholderSkillIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<SkillDto>) => r.body as SkillDto)
    );
  }

  /**
   * Path part for operation apiStakeholderSkillIdentityPut
   */
  static readonly ApiStakeholderSkillIdentityPutPath = '/api/stakeholder/skill/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderSkillIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderSkillIdentityPut$Response(params: {
    identity: string;
      body?: UpdateSkill
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderSkillService.ApiStakeholderSkillIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiStakeholderSkillIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderSkillIdentityPut(params: {
    identity: string;
      body?: UpdateSkill
  }): Observable<StringBaseResult> {

    return this.apiStakeholderSkillIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiStakeholderSkillIdentityDelete
   */
  static readonly ApiStakeholderSkillIdentityDeletePath = '/api/stakeholder/skill/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderSkillIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderSkillIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderSkillService.ApiStakeholderSkillIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiStakeholderSkillIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderSkillIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiStakeholderSkillIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
