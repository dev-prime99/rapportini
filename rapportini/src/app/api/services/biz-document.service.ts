/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddBizDocument } from '../models/add-biz-document';
import { BizDocumentDto } from '../models/biz-document-dto';
import { BizDocumentDtoBaseResult } from '../models/biz-document-dto-base-result';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateBizDocument } from '../models/update-biz-document';

@Injectable({
  providedIn: 'root',
})
export class BizDocumentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiBizdocumentGet
   */
  static readonly ApiBizdocumentGetPath = '/api/bizdocument';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBizdocumentGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBizdocumentGet$Response(params?: {
    typeIdentity?: string;
    typeCode?: string;
    subTypeIdentity?: string;
    subTypeCode?: string;
    typeGroup?: string;
    typeSectional?: string;
    documentCode?: string;
    stakeholderKind?: string;
    stakeholderIdentity?: string;
    stakeholderName?: string;
    dateFrom?: string;
    dateTo?: string;
    statusIdentity?: string;
    year?: number;

  }): Observable<StrictHttpResponse<Array<BizDocumentDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BizDocumentService.ApiBizdocumentGetPath, 'get');
    if (params) {

      rb.query('TypeIdentity', params.typeIdentity);
      rb.query('TypeCode', params.typeCode);
      rb.query('SubTypeIdentity', params.subTypeIdentity);
      rb.query('SubTypeCode', params.subTypeCode);
      rb.query('TypeGroup', params.typeGroup);
      rb.query('TypeSectional', params.typeSectional);
      rb.query('DocumentCode', params.documentCode);
      rb.query('StakeholderKind', params.stakeholderKind);
      rb.query('StakeholderIdentity', params.stakeholderIdentity);
      rb.query('StakeholderName', params.stakeholderName);
      rb.query('DateFrom', params.dateFrom);
      rb.query('DateTo', params.dateTo);
      rb.query('StatusIdentity', params.statusIdentity);
      rb.query('Year', params.year);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BizDocumentDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBizdocumentGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBizdocumentGet(params?: {
    typeIdentity?: string;
    typeCode?: string;
    subTypeIdentity?: string;
    subTypeCode?: string;
    typeGroup?: string;
    typeSectional?: string;
    documentCode?: string;
    stakeholderKind?: string;
    stakeholderIdentity?: string;
    stakeholderName?: string;
    dateFrom?: string;
    dateTo?: string;
    statusIdentity?: string;
    year?: number;

  }): Observable<Array<BizDocumentDto>> {

    return this.apiBizdocumentGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BizDocumentDto>>) => r.body as Array<BizDocumentDto>)
    );
  }

  /**
   * Path part for operation apiBizdocumentPost
   */
  static readonly ApiBizdocumentPostPath = '/api/bizdocument';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBizdocumentPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBizdocumentPost$Response(params?: {
      body?: AddBizDocument
  }): Observable<StrictHttpResponse<BizDocumentDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, BizDocumentService.ApiBizdocumentPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BizDocumentDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBizdocumentPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBizdocumentPost(params?: {
      body?: AddBizDocument
  }): Observable<BizDocumentDtoBaseResult> {

    return this.apiBizdocumentPost$Response(params).pipe(
      map((r: StrictHttpResponse<BizDocumentDtoBaseResult>) => r.body as BizDocumentDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiBizdocumentIdentityGet
   */
  static readonly ApiBizdocumentIdentityGetPath = '/api/bizdocument/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBizdocumentIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBizdocumentIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<BizDocumentDto>> {

    const rb = new RequestBuilder(this.rootUrl, BizDocumentService.ApiBizdocumentIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BizDocumentDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBizdocumentIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBizdocumentIdentityGet(params: {
    identity: string;

  }): Observable<BizDocumentDto> {

    return this.apiBizdocumentIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<BizDocumentDto>) => r.body as BizDocumentDto)
    );
  }

  /**
   * Path part for operation apiBizdocumentIdentityPut
   */
  static readonly ApiBizdocumentIdentityPutPath = '/api/bizdocument/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBizdocumentIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBizdocumentIdentityPut$Response(params: {
    identity: string;
      body?: UpdateBizDocument
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, BizDocumentService.ApiBizdocumentIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiBizdocumentIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBizdocumentIdentityPut(params: {
    identity: string;
      body?: UpdateBizDocument
  }): Observable<StringBaseResult> {

    return this.apiBizdocumentIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiBizdocumentIdentityDelete
   */
  static readonly ApiBizdocumentIdentityDeletePath = '/api/bizdocument/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBizdocumentIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBizdocumentIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, BizDocumentService.ApiBizdocumentIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiBizdocumentIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBizdocumentIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiBizdocumentIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
