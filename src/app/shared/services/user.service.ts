import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<any>{
    return this.http.get('/users/all-user');
  }
  public getUserById(id: number): Observable<any>{
    return this.http.get('/users/view-user/' + id);
  }
  public updateUserProfile(req: any): Observable<any>{
    return this.http.put('/profile', req);
  }
  public updateUser(id: number, req: any): Observable<any>{
    return this.http.put('/users/view-user/'+ id, req);
  }
  public createUser(req: any): Observable<any>{
    return this.http.post('/users/new-user', req);
  }
  public deleteUser(req: any): Observable<any>{
    return this.http.post('/users/all-user', req);
  }
}
