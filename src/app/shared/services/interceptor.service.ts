import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class FakeInterceptorService implements HttpInterceptor {

  constructor(
    private accountService: AccountService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const storage = localStorage.getItem('user');
    if(storage) {
      const user = JSON.parse(storage);
      const isLoggedIn = user && user.token;
      
      if (isLoggedIn) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${user.token}`
            }
        });
      }
    }
    return of(null)
          .pipe(mergeMap(() => this.handleRoute(request, next)))
          .pipe(materialize()) 
          .pipe(delay(500))
          .pipe(dematerialize());
  }

  handleRoute(req: HttpRequest<any>, next: HttpHandler) {
    switch (true) {
        case req.url.endsWith('/login') && req.method === 'POST':
            return this.accountService.authenticate(req);
        case req.url.endsWith('/users/new-user') && req.method === 'POST':
            return this.accountService.createUser(req);
        case req.url.endsWith('/profile') && req.method === 'PUT':
          return this.accountService.updateUserProfile(req);
        case req.url.endsWith('/users/all-user') && req.method === 'GET':
            return this.accountService.getUsers(req);
        case req.url.match(/\/view-user\/\d+$/) && req.method === 'GET':
            return this.accountService.getUserById(req);
        case req.url.match(/\/view-user\/\d+$/) && req.method === 'PUT':
            return this.accountService.updateUser(req);
        case req.url.endsWith('/users/all-user') && req.method === 'POST':
            return this.accountService.deleteUser(req);
        default:
            return next.handle(req);
    }    
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeInterceptorService,
  multi: true
};
