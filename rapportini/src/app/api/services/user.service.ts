/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ChangePasswordDto } from '../models/change-password-dto';
import { InfoDto } from '../models/info-dto';
import { ObjectBaseResult } from '../models/object-base-result';
import { RegisterDto } from '../models/register-dto';
import { SignInResult } from '../models/sign-in-result';
import { UserDto } from '../models/user-dto';
import { UserDtoBaseResult } from '../models/user-dto-base-result';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUsersLoginPost
   */
  static readonly ApiUsersLoginPostPath = '/api/users/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersLoginPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersLoginPost$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<SignInResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUsersLoginPostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SignInResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersLoginPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersLoginPost$Plain(params?: {

  }): Observable<SignInResult> {

    return this.apiUsersLoginPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SignInResult>) => r.body as SignInResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersLoginPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersLoginPost$Json$Response(params?: {

  }): Observable<StrictHttpResponse<SignInResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUsersLoginPostPath, 'post');
    if (params) {
      rb.body(params, 'application/x-www-form-urlencoded');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SignInResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersLoginPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersLoginPost$Json(params?: {

  }): Observable<SignInResult> {

    return this.apiUsersLoginPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SignInResult>) => r.body as SignInResult)
    );
  }

  /**
   * Path part for operation apiUsersRegisterPost
   */
  static readonly ApiUsersRegisterPostPath = '/api/users/register';

/**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersRegisterPost$Json$Plain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersRegisterPost$Json$Plain$Response(params?: {

    body?: RegisterDto
  }): Observable<StrictHttpResponse<UserDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUsersRegisterPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDtoBaseResult>;
      })
    );
  }

 /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersRegisterPost$Json$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersRegisterPost$Json$Plain(params?: {

    body?: RegisterDto
  }): Observable<UserDtoBaseResult> {

    return this.apiUsersRegisterPost$Json$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserDtoBaseResult>) => r.body as UserDtoBaseResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersRegisterPost$Json$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersRegisterPost$Json$Json$Response(params?: {

    body?: RegisterDto
  }): Observable<StrictHttpResponse<UserDtoBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUsersRegisterPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDtoBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersRegisterPost$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersRegisterPost$Json$Json(params?: {

    body?: RegisterDto
  }): Observable<UserDtoBaseResult> {

    return this.apiUsersRegisterPost$Json$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserDtoBaseResult>) => r.body as UserDtoBaseResult)
    );
  }

  /**
   * Path part for operation apiUsersChangePasswordPatch
   */
  static readonly ApiUsersChangePasswordPatchPath = '/api/users/change-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersChangePasswordPatch$Json$Plain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersChangePasswordPatch$Json$Plain$Response(params?: {

    body?: ChangePasswordDto
  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUsersChangePasswordPatchPath, 'patch');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ObjectBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersChangePasswordPatch$Json$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersChangePasswordPatch$Json$Plain(params?: {

    body?: ChangePasswordDto
  }): Observable<ObjectBaseResult> {

    return this.apiUsersChangePasswordPatch$Json$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersChangePasswordPatch$Json$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersChangePasswordPatch$Json$Json$Response(params?: {

    body?: ChangePasswordDto
  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUsersChangePasswordPatchPath, 'patch');
    if (params) {


      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `apiUsersChangePasswordPatch$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersChangePasswordPatch$Json$Json(params?: {

    body?: ChangePasswordDto
  }): Observable<ObjectBaseResult> {

    return this.apiUsersChangePasswordPatch$Json$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

  /**
   * Path part for operation apiUsersLogoutPost
   */
  static readonly ApiUsersLogoutPostPath = '/api/users/logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersLogoutPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersLogoutPost$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUsersLogoutPostPath, 'post');
    
    rb.body({data:'logout'}, 'application/json');

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ObjectBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersLogoutPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersLogoutPost$Plain(params?: {

  }): Observable<ObjectBaseResult> {

    return this.apiUsersLogoutPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersLogoutPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersLogoutPost$Json$Response(params?: {

  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUsersLogoutPostPath, 'post');
    
    rb.header('Content-Type','application/x-www-form-urlencoded');
    //rb.body({data:'logout'}, 'application/json');
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
   * To access the full response (for headers, for example), `apiUsersLogoutPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersLogoutPost$Json(params?: {

  }): Observable<ObjectBaseResult> {

    return this.apiUsersLogoutPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

  /**
   * Path part for operation apiUsersUserIdRolesPatch
   */
  static readonly ApiUsersUserIdRolesPatchPath = '/api/users/{userId}/roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersUserIdRolesPatch$Json$Plain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersUserIdRolesPatch$Json$Plain$Response(params: {
    userId: string;

    body?: Array<number>
  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUsersUserIdRolesPatchPath, 'patch');
    if (params) {

      rb.path('userId', params.userId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ObjectBaseResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersUserIdRolesPatch$Json$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersUserIdRolesPatch$Json$Plain(params: {
    userId: string;

    body?: Array<number>
  }): Observable<ObjectBaseResult> {

    return this.apiUsersUserIdRolesPatch$Json$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

 /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersUserIdRolesPatch$Json$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersUserIdRolesPatch$Json$Json$Response(params: {
    userId: string;

    body?: Array<number>
  }): Observable<StrictHttpResponse<ObjectBaseResult>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUsersUserIdRolesPatchPath, 'patch');
    if (params) {

      rb.path('userId', params.userId);

      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `apiUsersUserIdRolesPatch$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersUserIdRolesPatch$Json$Json(params: {
    userId: string;

    body?: Array<number>
  }): Observable<ObjectBaseResult> {

    return this.apiUsersUserIdRolesPatch$Json$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ObjectBaseResult>) => r.body as ObjectBaseResult)
    );
  }

  /**
   * Path part for operation apiUsersGet
   */
  static readonly ApiUsersGetPath = '/api/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUsersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Plain(params?: {

  }): Observable<Array<UserDto>> {

    return this.apiUsersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserDto>>) => r.body as Array<UserDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUsersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Json(params?: {

  }): Observable<Array<UserDto>> {

    return this.apiUsersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserDto>>) => r.body as Array<UserDto>)
    );
  }

  /**
   * Path part for operation apiUsersLoggedGet
   */
  static readonly ApiUsersLoggedGetPath = '/api/users/logged';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersLoggedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersLoggedGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<InfoDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUsersLoggedGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InfoDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersLoggedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersLoggedGet$Plain(params?: {

  }): Observable<InfoDto> {

    return this.apiUsersLoggedGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<InfoDto>) => r.body as InfoDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersLoggedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersLoggedGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<InfoDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUsersLoggedGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InfoDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersLoggedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersLoggedGet$Json(params?: {

  }): Observable<InfoDto> {

    return this.apiUsersLoggedGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<InfoDto>) => r.body as InfoDto)
    );
  }

}
