/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddMeasureUnit } from '../models/add-measure-unit';
import { MeasureUnitDto } from '../models/measure-unit-dto';
import { MeasureUnitDtoBaseResult } from '../models/measure-unit-dto-base-result';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateMeasureUnit } from '../models/update-measure-unit';

@Injectable({
  providedIn: 'root',
})
export class MeasureUnitService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiMeasureUnitGet
   */
  static readonly ApiMeasureUnitGetPath = '/api/measure-unit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMeasureUnitGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMeasureUnitGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<MeasureUnitDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MeasureUnitService.ApiMeasureUnitGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MeasureUnitDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMeasureUnitGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMeasureUnitGet(params?: {

  }): Observable<Array<MeasureUnitDto>> {

    return this.apiMeasureUnitGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MeasureUnitDto>>) => r.body as Array<MeasureUnitDto>)
    );
  }

  /**
   * Path part for operation apiMeasureUnitPost
   */
  static readonly ApiMeasureUnitPostPath = '/api/measure-unit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMeasureUnitPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMeasureUnitPost$Response(params?: {
      body?: AddMeasureUnit
  }): Observable<StrictHttpResponse<MeasureUnitDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, MeasureUnitService.ApiMeasureUnitPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MeasureUnitDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMeasureUnitPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMeasureUnitPost(params?: {
      body?: AddMeasureUnit
  }): Observable<MeasureUnitDtoBaseResult> {

    return this.apiMeasureUnitPost$Response(params).pipe(
      map((r: StrictHttpResponse<MeasureUnitDtoBaseResult>) => r.body as MeasureUnitDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiMeasureUnitIdentityGet
   */
  static readonly ApiMeasureUnitIdentityGetPath = '/api/measure-unit/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMeasureUnitIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMeasureUnitIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<MeasureUnitDto>> {

    const rb = new RequestBuilder(this.rootUrl, MeasureUnitService.ApiMeasureUnitIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MeasureUnitDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMeasureUnitIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMeasureUnitIdentityGet(params: {
    identity: string;

  }): Observable<MeasureUnitDto> {

    return this.apiMeasureUnitIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<MeasureUnitDto>) => r.body as MeasureUnitDto)
    );
  }

  /**
   * Path part for operation apiMeasureUnitIdentityPut
   */
  static readonly ApiMeasureUnitIdentityPutPath = '/api/measure-unit/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMeasureUnitIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMeasureUnitIdentityPut$Response(params: {
    identity: string;
      body?: UpdateMeasureUnit
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, MeasureUnitService.ApiMeasureUnitIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiMeasureUnitIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMeasureUnitIdentityPut(params: {
    identity: string;
      body?: UpdateMeasureUnit
  }): Observable<StringBaseResult> {

    return this.apiMeasureUnitIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiMeasureUnitIdentityDelete
   */
  static readonly ApiMeasureUnitIdentityDeletePath = '/api/measure-unit/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMeasureUnitIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMeasureUnitIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, MeasureUnitService.ApiMeasureUnitIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiMeasureUnitIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMeasureUnitIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiMeasureUnitIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
