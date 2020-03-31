/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddArticleTag } from '../models/add-article-tag';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { TagDto } from '../models/tag-dto';
import { TagDtoBaseResult } from '../models/tag-dto-base-result';
import { UpdateArticleTag } from '../models/update-article-tag';

@Injectable({
  providedIn: 'root',
})
export class ArticleTagService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiArticleTagGet
   */
  static readonly ApiArticleTagGetPath = '/api/article/tag';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticleTagGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticleTagGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<TagDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleTagService.ApiArticleTagGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TagDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiArticleTagGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticleTagGet(params?: {

  }): Observable<Array<TagDto>> {

    return this.apiArticleTagGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TagDto>>) => r.body as Array<TagDto>)
    );
  }

  /**
   * Path part for operation apiArticleTagPost
   */
  static readonly ApiArticleTagPostPath = '/api/article/tag';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticleTagPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArticleTagPost$Response(params?: {
      body?: AddArticleTag
  }): Observable<StrictHttpResponse<TagDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleTagService.ApiArticleTagPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TagDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiArticleTagPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArticleTagPost(params?: {
      body?: AddArticleTag
  }): Observable<TagDtoBaseResult> {

    return this.apiArticleTagPost$Response(params).pipe(
      map((r: StrictHttpResponse<TagDtoBaseResult>) => r.body as TagDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiArticleTagIdentityGet
   */
  static readonly ApiArticleTagIdentityGetPath = '/api/article/tag/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticleTagIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticleTagIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<TagDto>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleTagService.ApiArticleTagIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TagDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiArticleTagIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticleTagIdentityGet(params: {
    identity: string;

  }): Observable<TagDto> {

    return this.apiArticleTagIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<TagDto>) => r.body as TagDto)
    );
  }

  /**
   * Path part for operation apiArticleTagIdentityPut
   */
  static readonly ApiArticleTagIdentityPutPath = '/api/article/tag/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticleTagIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArticleTagIdentityPut$Response(params: {
    identity: string;
      body?: UpdateArticleTag
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleTagService.ApiArticleTagIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiArticleTagIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArticleTagIdentityPut(params: {
    identity: string;
      body?: UpdateArticleTag
  }): Observable<StringBaseResult> {

    return this.apiArticleTagIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiArticleTagIdentityDelete
   */
  static readonly ApiArticleTagIdentityDeletePath = '/api/article/tag/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticleTagIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticleTagIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleTagService.ApiArticleTagIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiArticleTagIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticleTagIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiArticleTagIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
