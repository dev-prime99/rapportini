/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddBizTransactionType } from '../models/add-biz-transaction-type';
import { BizTransactionTypeDto } from '../models/biz-transaction-type-dto';
import { BizTransactionTypeDtoBaseResult } from '../models/biz-transaction-type-dto-base-result';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateBizTransactionType } from '../models/update-biz-transaction-type';

@Injectable({
  providedIn: 'root',
})
export class BizTransactionTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTransactionTypeGet
   */
  static readonly ApiTransactionTypeGetPath = '/api/transaction-type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTransactionTypeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionTypeGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<BizTransactionTypeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BizTransactionTypeService.ApiTransactionTypeGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BizTransactionTypeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTransactionTypeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionTypeGet(params?: {

  }): Observable<Array<BizTransactionTypeDto>> {

    return this.apiTransactionTypeGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BizTransactionTypeDto>>) => r.body as Array<BizTransactionTypeDto>)
    );
  }

  /**
   * Path part for operation apiTransactionTypePost
   */
  static readonly ApiTransactionTypePostPath = '/api/transaction-type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTransactionTypePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTransactionTypePost$Response(params?: {
      body?: AddBizTransactionType
  }): Observable<StrictHttpResponse<BizTransactionTypeDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, BizTransactionTypeService.ApiTransactionTypePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BizTransactionTypeDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTransactionTypePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTransactionTypePost(params?: {
      body?: AddBizTransactionType
  }): Observable<BizTransactionTypeDtoBaseResult> {

    return this.apiTransactionTypePost$Response(params).pipe(
      map((r: StrictHttpResponse<BizTransactionTypeDtoBaseResult>) => r.body as BizTransactionTypeDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiTransactionTypeIdentityGet
   */
  static readonly ApiTransactionTypeIdentityGetPath = '/api/transaction-type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTransactionTypeIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionTypeIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<BizTransactionTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, BizTransactionTypeService.ApiTransactionTypeIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BizTransactionTypeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTransactionTypeIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionTypeIdentityGet(params: {
    identity: string;

  }): Observable<BizTransactionTypeDto> {

    return this.apiTransactionTypeIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<BizTransactionTypeDto>) => r.body as BizTransactionTypeDto)
    );
  }

  /**
   * Path part for operation apiTransactionTypeIdentityPut
   */
  static readonly ApiTransactionTypeIdentityPutPath = '/api/transaction-type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTransactionTypeIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTransactionTypeIdentityPut$Response(params: {
    identity: string;
      body?: UpdateBizTransactionType
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, BizTransactionTypeService.ApiTransactionTypeIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiTransactionTypeIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTransactionTypeIdentityPut(params: {
    identity: string;
      body?: UpdateBizTransactionType
  }): Observable<StringBaseResult> {

    return this.apiTransactionTypeIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiTransactionTypeIdentityDelete
   */
  static readonly ApiTransactionTypeIdentityDeletePath = '/api/transaction-type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTransactionTypeIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionTypeIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, BizTransactionTypeService.ApiTransactionTypeIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiTransactionTypeIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTransactionTypeIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiTransactionTypeIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
