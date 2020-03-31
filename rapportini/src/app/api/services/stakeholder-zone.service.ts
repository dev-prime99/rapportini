/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddZone } from '../models/add-zone';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateZone } from '../models/update-zone';
import { ZoneDto } from '../models/zone-dto';

@Injectable({
  providedIn: 'root',
})
export class StakeholderZoneService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiStakeholderZoneGet
   */
  static readonly ApiStakeholderZoneGetPath = '/api/stakeholder/zone';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderZoneGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderZoneGet$Response(params?: {
    code?: string;
    description?: string;

  }): Observable<StrictHttpResponse<Array<ZoneDto>>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderZoneService.ApiStakeholderZoneGetPath, 'get');
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
        return r as StrictHttpResponse<Array<ZoneDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStakeholderZoneGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderZoneGet(params?: {
    code?: string;
    description?: string;

  }): Observable<Array<ZoneDto>> {

    return this.apiStakeholderZoneGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ZoneDto>>) => r.body as Array<ZoneDto>)
    );
  }

  /**
   * Path part for operation apiStakeholderZonePost
   */
  static readonly ApiStakeholderZonePostPath = '/api/stakeholder/zone';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderZonePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderZonePost$Response(params?: {
      body?: AddZone
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderZoneService.ApiStakeholderZonePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiStakeholderZonePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderZonePost(params?: {
      body?: AddZone
  }): Observable<StringBaseResult> {

    return this.apiStakeholderZonePost$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiStakeholderZoneIdentityGet
   */
  static readonly ApiStakeholderZoneIdentityGetPath = '/api/stakeholder/zone/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderZoneIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderZoneIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ZoneDto>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderZoneService.ApiStakeholderZoneIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ZoneDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStakeholderZoneIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderZoneIdentityGet(params: {
    identity: string;

  }): Observable<ZoneDto> {

    return this.apiStakeholderZoneIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<ZoneDto>) => r.body as ZoneDto)
    );
  }

  /**
   * Path part for operation apiStakeholderZoneIdentityPut
   */
  static readonly ApiStakeholderZoneIdentityPutPath = '/api/stakeholder/zone/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderZoneIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderZoneIdentityPut$Response(params: {
    identity: string;
      body?: UpdateZone
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderZoneService.ApiStakeholderZoneIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiStakeholderZoneIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStakeholderZoneIdentityPut(params: {
    identity: string;
      body?: UpdateZone
  }): Observable<StringBaseResult> {

    return this.apiStakeholderZoneIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiStakeholderZoneIdentityDelete
   */
  static readonly ApiStakeholderZoneIdentityDeletePath = '/api/stakeholder/zone/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStakeholderZoneIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderZoneIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, StakeholderZoneService.ApiStakeholderZoneIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiStakeholderZoneIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStakeholderZoneIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiStakeholderZoneIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
