/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddArticle } from '../models/add-article';
import { ArticleDto } from '../models/article-dto';
import { ArticleDtoBaseResult } from '../models/article-dto-base-result';
import { ObjectBaseResult } from '../models/object-base-result';
import { StringBaseResult } from '../models/string-base-result';
import { UpdateArticle } from '../models/update-article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiArticleGet
   */
  static readonly ApiArticleGetPath = '/api/article';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticleGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticleGet$Response(params?: {
    code?: string;
    eanCode?: string;
    shortDescription?: string;
    tagIdentity?: string;

  }): Observable<StrictHttpResponse<Array<ArticleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleService.ApiArticleGetPath, 'get');
    if (params) {

      rb.query('Code', params.code);
      rb.query('EanCode', params.eanCode);
      rb.query('ShortDescription', params.shortDescription);
      rb.query('TagIdentity', params.tagIdentity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiArticleGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticleGet(params?: {
    code?: string;
    eanCode?: string;
    shortDescription?: string;
    tagIdentity?: string;

  }): Observable<Array<ArticleDto>> {

    return this.apiArticleGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ArticleDto>>) => r.body as Array<ArticleDto>)
    );
  }

  /**
   * Path part for operation apiArticlePost
   */
  static readonly ApiArticlePostPath = '/api/article';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticlePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArticlePost$Response(params?: {
      body?: AddArticle
  }): Observable<StrictHttpResponse<ArticleDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleService.ApiArticlePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ArticleDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiArticlePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArticlePost(params?: {
      body?: AddArticle
  }): Observable<ArticleDtoBaseResult> {

    return this.apiArticlePost$Response(params).pipe(
      map((r: StrictHttpResponse<ArticleDtoBaseResult>) => r.body as ArticleDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiArticleIdentityGet
   */
  static readonly ApiArticleIdentityGetPath = '/api/article/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticleIdentityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticleIdentityGet$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ArticleDto>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleService.ApiArticleIdentityGetPath, 'get');
    if (params) {

      rb.path('identity', params.identity);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ArticleDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiArticleIdentityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticleIdentityGet(params: {
    identity: string;

  }): Observable<ArticleDto> {

    return this.apiArticleIdentityGet$Response(params).pipe(
      map((r: StrictHttpResponse<ArticleDto>) => r.body as ArticleDto)
    );
  }

  /**
   * Path part for operation apiArticleIdentityPut
   */
  static readonly ApiArticleIdentityPutPath = '/api/article/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticleIdentityPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArticleIdentityPut$Response(params: {
    identity: string;
      body?: UpdateArticle
  }): Observable<StrictHttpResponse<StringBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleService.ApiArticleIdentityPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiArticleIdentityPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArticleIdentityPut(params: {
    identity: string;
      body?: UpdateArticle
  }): Observable<StringBaseResult> {

    return this.apiArticleIdentityPut$Response(params).pipe(
      map((r: StrictHttpResponse<StringBaseResult>) => r.body as StringBaseResult)
    );
  }

  /**
   * Path part for operation apiArticleIdentityDelete
   */
  static readonly ApiArticleIdentityDeletePath = '/api/article/{identity}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArticleIdentityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticleIdentityDelete$Response(params: {
    identity: string;

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleService.ApiArticleIdentityDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiArticleIdentityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArticleIdentityDelete(params: {
    identity: string;

  }): Observable<ObjectBaseResult> {

    return this.apiArticleIdentityDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

}
