import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      userName: new FormControl('',Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  public onSubmit() {
    if (!this.form.valid) {
      return;
    }
    this.authService.login(this.form.value).subscribe(
      res => {
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate([`/dashboard`]);
      },
      err =>  this.toastr.error(err.message)
    )
  }

}
