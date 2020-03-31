/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddDocumentType } from '../models/add-document-type';
import { DocumentTypeDto } from '../models/document-type-dto';
import { DocumentTypeDtoBaseResult } from '../models/document-type-dto-base-result';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateDocumentType } from '../models/update-document-type';

@Injectable({
  providedIn: 'root',
})
export class DocumentTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDocumentTypeGet
   */
  static readonly ApiDocumentTypeGetPath = '/api/document/type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentTypeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentTypeGet$Response(params?: {
    code?: string;
    description?: string;
    groupType?: string;
    sectional?: string;

  }): Observable<StrictHttpResponse<Array<DocumentTypeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentTypeService.ApiDocumentTypeGetPath, 'get');
    if (params) {

      rb.query('Code', params.code);
      rb.query('Description', params.description);
      rb.query('GroupType', params.groupType);
      rb.query('Sectional', params.sectional);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DocumentTypeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDocumentTypeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentTypeGet(params?: {
    code?: string;
    description?: string;
    groupType?: string;
    sectional?: string;

  }): Observable<Array<DocumentTypeDto>> {

    return this.apiDocumentTypeGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<DocumentTypeDto>>) => r.body as Array<DocumentTypeDto>)
    );
  }

  /**
   * Path part for operation apiDocumentTypePost
   */
  static readonly ApiDocumentTypePostPath = '/api/document/type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentTypePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentTypePost$Response(params?: {
      body?: AddDocumentType
  }): Observable<StrictHttpResponse<DocumentTypeDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentTypeService.ApiDocumentTypePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DocumentTypeDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDocumentTypePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentTypePost(params?: {
      body?: AddDocumentType
  }): Observable<DocumentTypeDtoBaseResult> {

    return this.apiDocumentTypePost$Response(params).pipe(
      map((r: StrictHttpResponse<DocumentTypeDtoBaseResult>) => r.body as DocumentTypeDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiDocumentTypeIdentityGet
   */
  static readonly ApiDocumentTypeIdentityGetPath = '/api/document/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentTypeIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentTypeIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<DocumentTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentTypeService.ApiDocumentTypeIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DocumentTypeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDocumentTypeIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentTypeIdentityGet(params: {
    identity: string;

  }): Observable<DocumentTypeDto> {

    return this.apiDocumentTypeIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<DocumentTypeDto>) => r.body as DocumentTypeDto)
    );
  }

  /**
   * Path part for operation apiDocumentTypeIdentityPut
   */
  static readonly ApiDocumentTypeIdentityPutPath = '/api/document/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentTypeIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentTypeIdentityPut$Response(params: {
    identity: string;
      body?: UpdateDocumentType
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentTypeService.ApiDocumentTypeIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiDocumentTypeIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentTypeIdentityPut(params: {
    identity: string;
      body?: UpdateDocumentType
  }): Observable<StringBaseResult> {

    return this.apiDocumentTypeIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiDocumentTypeIdentityDelete
   */
  static readonly ApiDocumentTypeIdentityDeletePath = '/api/document/type/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentTypeIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentTypeIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentTypeService.ApiDocumentTypeIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiDocumentTypeIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentTypeIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiDocumentTypeIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
