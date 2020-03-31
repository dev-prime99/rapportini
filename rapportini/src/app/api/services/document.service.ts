/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddDocument } from '../models/add-document';
import { DocumentDto } from '../models/document-dto';
import { DocumentDtoBaseResult } from '../models/document-dto-base-result';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateDocument } from '../models/update-document';

@Injectable({
  providedIn: 'root',
})
export class DocumentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDocumentGet
   */
  static readonly ApiDocumentGetPath = '/api/document';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<DocumentDto>>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentService.ApiDocumentGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DocumentDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDocumentGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentGet(params?: {

  }): Observable<Array<DocumentDto>> {

    return this.apiDocumentGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<DocumentDto>>) => r.body as Array<DocumentDto>)
    );
  }

  /**
   * Path part for operation apiDocumentPost
   */
  static readonly ApiDocumentPostPath = '/api/document';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentPost$Response(params?: {
      body?: AddDocument
  }): Observable<StrictHttpResponse<DocumentDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentService.ApiDocumentPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DocumentDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDocumentPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentPost(params?: {
      body?: AddDocument
  }): Observable<DocumentDtoBaseResult> {

    return this.apiDocumentPost$Response(params).pipe(
      map((r: StrictHttpResponse<DocumentDtoBaseResult>) => r.body as DocumentDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiDocumentIdentityGet
   */
  static readonly ApiDocumentIdentityGetPath = '/api/document/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<DocumentDto>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentService.ApiDocumentIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DocumentDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDocumentIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentIdentityGet(params: {
    identity: string;

  }): Observable<DocumentDto> {

    return this.apiDocumentIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<DocumentDto>) => r.body as DocumentDto)
    );
  }

  /**
   * Path part for operation apiDocumentIdentityPut
   */
  static readonly ApiDocumentIdentityPutPath = '/api/document/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentIdentityPut$Response(params: {
    identity: string;
      body?: UpdateDocument
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentService.ApiDocumentIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiDocumentIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentIdentityPut(params: {
    identity: string;
      body?: UpdateDocument
  }): Observable<StringBaseResult> {

    return this.apiDocumentIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiDocumentIdentityDelete
   */
  static readonly ApiDocumentIdentityDeletePath = '/api/document/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentService.ApiDocumentIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiDocumentIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiDocumentIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
