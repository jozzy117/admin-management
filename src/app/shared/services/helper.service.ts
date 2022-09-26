import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
  ) { }

  ok(body?:any) {
    return of(new HttpResponse({ status: 200, body }))
  }

  error(message:any) {
    return throwError({ error: { message } });
  }

  unauthorized() {
    return throwError({ status: 401, error: { message: 'Unauthorised' } });
  }

  isLoggedIn(req: HttpRequest<any>) {
    return req.headers.get('Authorization') === 'Bearer fake-jwt-token';
  }

  idFromUrl(req: HttpRequest<any>) {
    const urlParts = req.url.split('/');
    return parseInt(urlParts[urlParts.length - 1]);
  } 
}
