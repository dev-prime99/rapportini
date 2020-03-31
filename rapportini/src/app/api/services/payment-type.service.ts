/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddPaymentType } from '../models/add-payment-type';
import { ObjectBaseResult } from '../models/object-base-result';
import { PaymentTypeDto } from '../models/payment-type-dto';
import { PaymentTypeDtoBaseResult } from '../models/payment-type-dto-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdatePaymentType } from '../models/update-payment-type';

@Injectable({
  providedIn: 'root',
})
export class PaymentTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPaymentTypeGet
   */
  static readonly ApiPaymentTypeGetPath = '/api/payment-type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPaymentTypeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPaymentTypeGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<PaymentTypeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentTypeService.ApiPaymentTypeGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PaymentTypeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPaymentTypeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPaymentTypeGet(params?: {

  }): Observable<Array<PaymentTypeDto>> {

    return this.apiPaymentTypeGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PaymentTypeDto>>) => r.body as Array<PaymentTypeDto>)
    );
  }

  /**
   * Path part for operation apiPaymentTypePost
   */
  static readonly ApiPaymentTypePostPath = '/api/payment-type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPaymentTypePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPaymentTypePost$Response(params?: {
      body?: AddPaymentType
  }): Observable<StrictHttpResponse<PaymentTypeDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentTypeService.ApiPaymentTypePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaymentTypeDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPaymentTypePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPaymentTypePost(params?: {
      body?: AddPaymentType
  }): Observable<PaymentTypeDtoBaseResult> {

    return this.apiPaymentTypePost$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentTypeDtoBaseResult>) => r.body as PaymentTypeDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiPaymentTypeIdentityGet
   */
  static readonly ApiPaymentTypeIdentityGetPath = '/api/payment-type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPaymentTypeIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPaymentTypeIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<PaymentTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentTypeService.ApiPaymentTypeIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaymentTypeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPaymentTypeIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPaymentTypeIdentityGet(params: {
    identity: string;

  }): Observable<PaymentTypeDto> {

    return this.apiPaymentTypeIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentTypeDto>) => r.body as PaymentTypeDto)
    );
  }

  /**
   * Path part for operation apiPaymentTypeIdentityPut
   */
  static readonly ApiPaymentTypeIdentityPutPath = '/api/payment-type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPaymentTypeIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPaymentTypeIdentityPut$Response(params: {
    identity: string;
      body?: UpdatePaymentType
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentTypeService.ApiPaymentTypeIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiPaymentTypeIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPaymentTypeIdentityPut(params: {
    identity: string;
      body?: UpdatePaymentType
  }): Observable<StringBaseResult> {

    return this.apiPaymentTypeIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiPaymentTypeIdentityDelete
   */
  static readonly ApiPaymentTypeIdentityDeletePath = '/api/payment-type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPaymentTypeIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPaymentTypeIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentTypeService.ApiPaymentTypeIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiPaymentTypeIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPaymentTypeIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiPaymentTypeIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
