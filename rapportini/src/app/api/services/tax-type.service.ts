/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddTaxType } from '../models/add-tax-type';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { TaxTypeDto } from '../models/tax-type-dto';
import { TaxTypeDtoBaseResult } from '../models/tax-type-dto-base-result';
import { UpdateTaxType } from '../models/update-tax-type';

@Injectable({
  providedIn: 'root',
})
export class TaxTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTaxTypeGet
   */
  static readonly ApiTaxTypeGetPath = '/api/tax-type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaxTypeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaxTypeGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<TaxTypeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TaxTypeService.ApiTaxTypeGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TaxTypeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTaxTypeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaxTypeGet(params?: {

  }): Observable<Array<TaxTypeDto>> {

    return this.apiTaxTypeGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TaxTypeDto>>) => r.body as Array<TaxTypeDto>)
    );
  }

  /**
   * Path part for operation apiTaxTypePost
   */
  static readonly ApiTaxTypePostPath = '/api/tax-type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaxTypePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTaxTypePost$Response(params?: {
      body?: AddTaxType
  }): Observable<StrictHttpResponse<TaxTypeDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, TaxTypeService.ApiTaxTypePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TaxTypeDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTaxTypePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTaxTypePost(params?: {
      body?: AddTaxType
  }): Observable<TaxTypeDtoBaseResult> {

    return this.apiTaxTypePost$Response(params).pipe(
      map((r: StrictHttpResponse<TaxTypeDtoBaseResult>) => r.body as TaxTypeDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiTaxTypeIdentityGet
   */
  static readonly ApiTaxTypeIdentityGetPath = '/api/tax-type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaxTypeIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaxTypeIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<TaxTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, TaxTypeService.ApiTaxTypeIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TaxTypeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTaxTypeIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaxTypeIdentityGet(params: {
    identity: string;

  }): Observable<TaxTypeDto> {

    return this.apiTaxTypeIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<TaxTypeDto>) => r.body as TaxTypeDto)
    );
  }

  /**
   * Path part for operation apiTaxTypeIdentityPut
   */
  static readonly ApiTaxTypeIdentityPutPath = '/api/tax-type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaxTypeIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTaxTypeIdentityPut$Response(params: {
    identity: string;
      body?: UpdateTaxType
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, TaxTypeService.ApiTaxTypeIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiTaxTypeIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTaxTypeIdentityPut(params: {
    identity: string;
      body?: UpdateTaxType
  }): Observable<StringBaseResult> {

    return this.apiTaxTypeIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiTaxTypeIdentityDelete
   */
  static readonly ApiTaxTypeIdentityDeletePath = '/api/tax-type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTaxTypeIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaxTypeIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, TaxTypeService.ApiTaxTypeIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiTaxTypeIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTaxTypeIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiTaxTypeIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
