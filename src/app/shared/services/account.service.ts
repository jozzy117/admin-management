import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User_Data } from '../components/data.ts/user';
import { HelperService } from './helper.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  users = JSON.parse(localStorage.getItem('users') || '') || User_Data;
  constructor(
    private helperService: HelperService,
    private toastr: ToastrService
  ) { }

  authenticate(req: HttpRequest<any>) {
      const { userName, password } = req.body;
      const user = this.users.find((x:any) => x.username === userName && x.password === password);
      if (!user) return this.helperService.error('Username or password is incorrect');
      this.toastr.success('Login Successful!');
      return this.helperService.ok({
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          middleName: user.middleName,
          lastName: user.lastName,
          bvn: user.bvn,
          occupation: user.occupation,
          role: user.role,
          token: 'fake-jwt-token'
      });

  }

  createUser(req: HttpRequest<any>) {
      const user = req.body;

      if (this.users.find((x:any) => x.username === user.username)) {
          return this.helperService.error('Username "' + user.username + '" is already taken')
      }

      user.id = this.users.length ? Math.max(...this.users.map((x:any) => x.id)) + 1 : 1;
      this.users.push(user);
      localStorage.setItem('users', JSON.stringify(this.users));
      return this.helperService.ok();
  }

  getUsers(req: HttpRequest<any>) {
      if (!this.helperService.isLoggedIn(req)) return this.helperService.unauthorized();
      return this.helperService.ok(this.users);
  }

  getUserById(req: HttpRequest<any>) {
      if (!this.helperService.isLoggedIn(req)) return this.helperService.unauthorized();

      const user = this.users.find((x:any) => x.id === this.helperService.idFromUrl(req));
      return this.helperService.ok(user);
  }

  updateUser(req: HttpRequest<any>) {
      if (!this.helperService.isLoggedIn(req)) return this.helperService.unauthorized();

      let params = req.body;
      let user = this.users.find((x:any) => x.id === this.helperService.idFromUrl(req));

      Object.assign(user, params);
      localStorage.setItem('users', JSON.stringify(this.users));
      this.toastr.success('Update Successful!');
      return this.helperService.ok();
  }

  updateUserProfile(req: HttpRequest<any>) {
      if (!this.helperService.isLoggedIn(req)) return this.helperService.unauthorized();

      let params = req.body;
      let user = JSON.parse(localStorage.getItem('user') || '');
      let userGlobe = this.users.find((x:any) => x.id === user.id);

      Object.assign(user, params);
      Object.assign(userGlobe, params);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('users', JSON.stringify(this.users));
      this.toastr.success('Update Successful!');
      return this.helperService.ok();
  }

  deleteUser(req: HttpRequest<any>) {
      if (!this.helperService.isLoggedIn(req)) return this.helperService.unauthorized();

      let params = req.body;
      for(let i = 0; i < params.length; i++) {
        this.users = this.users.filter((x:any) => x.id !== params[i]);
      }
      localStorage.setItem('users', JSON.stringify(this.users));
      return this.helperService.ok();
  }

}
