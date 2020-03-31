/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddBizDocumentType } from '../models/add-biz-document-type';
import { BizDocumentTypeDto } from '../models/biz-document-type-dto';
import { BizDocumentTypeDtoBaseResult } from '../models/biz-document-type-dto-base-result';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateBizDocumentType } from '../models/update-biz-document-type';

@Injectable({
  providedIn: 'root',
})
export class BizDocumentTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiBizdocumentTypeGet
   */
  static readonly ApiBizdocumentTypeGetPath = '/api/bizdocument/type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBizdocumentTypeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBizdocumentTypeGet$Response(params?: {
    code?: string;
    description?: string;
    groupType?: string;
    sectional?: string;
    fatherIdentity?: string;

  }): Observable<StrictHttpResponse<Array<BizDocumentTypeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BizDocumentTypeService.ApiBizdocumentTypeGetPath, 'get');
    if (params) {

      rb.query('Code', params.code);
      rb.query('Description', params.description);
      rb.query('GroupType', params.groupType);
      rb.query('Sectional', params.sectional);
      rb.query('FatherIdentity', params.fatherIdentity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BizDocumentTypeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBizdocumentTypeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBizdocumentTypeGet(params?: {
    code?: string;
    description?: string;
    groupType?: string;
    sectional?: string;
    fatherIdentity?: string;

  }): Observable<Array<BizDocumentTypeDto>> {

    return this.apiBizdocumentTypeGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BizDocumentTypeDto>>) => r.body as Array<BizDocumentTypeDto>)
    );
  }

  /**
   * Path part for operation apiBizdocumentTypePost
   */
  static readonly ApiBizdocumentTypePostPath = '/api/bizdocument/type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBizdocumentTypePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBizdocumentTypePost$Response(params?: {
      body?: AddBizDocumentType
  }): Observable<StrictHttpResponse<BizDocumentTypeDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, BizDocumentTypeService.ApiBizdocumentTypePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BizDocumentTypeDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBizdocumentTypePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBizdocumentTypePost(params?: {
      body?: AddBizDocumentType
  }): Observable<BizDocumentTypeDtoBaseResult> {

    return this.apiBizdocumentTypePost$Response(params).pipe(
      map((r: StrictHttpResponse<BizDocumentTypeDtoBaseResult>) => r.body as BizDocumentTypeDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiBizdocumentTypeIdentityGet
   */
  static readonly ApiBizdocumentTypeIdentityGetPath = '/api/bizdocument/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBizdocumentTypeIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBizdocumentTypeIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<BizDocumentTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, BizDocumentTypeService.ApiBizdocumentTypeIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BizDocumentTypeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBizdocumentTypeIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBizdocumentTypeIdentityGet(params: {
    identity: string;

  }): Observable<BizDocumentTypeDto> {

    return this.apiBizdocumentTypeIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<BizDocumentTypeDto>) => r.body as BizDocumentTypeDto)
    );
  }

  /**
   * Path part for operation apiBizdocumentTypeIdentityPut
   */
  static readonly ApiBizdocumentTypeIdentityPutPath = '/api/bizdocument/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBizdocumentTypeIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBizdocumentTypeIdentityPut$Response(params: {
    identity: string;
      body?: UpdateBizDocumentType
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, BizDocumentTypeService.ApiBizdocumentTypeIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiBizdocumentTypeIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBizdocumentTypeIdentityPut(params: {
    identity: string;
      body?: UpdateBizDocumentType
  }): Observable<StringBaseResult> {

    return this.apiBizdocumentTypeIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiBizdocumentTypeIdentityDelete
   */
  static readonly ApiBizdocumentTypeIdentityDeletePath = '/api/bizdocument/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBizdocumentTypeIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBizdocumentTypeIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, BizDocumentTypeService.ApiBizdocumentTypeIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiBizdocumentTypeIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBizdocumentTypeIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiBizdocumentTypeIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
