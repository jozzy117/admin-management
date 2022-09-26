import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserInfoComponent } from 'src/app/shared/components/user-info/user-info.component';
import { UserService } from 'src/app/shared/services/user.service';
import { DependenciesService } from './dependencies.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  @ViewChild(UserInfoComponent) userChild!: UserInfoComponent;
  public title:string = '';
  public titleActionButtons = this.dependencies.getTitleActionButtons;
  constructor(
    private router: Router,
    private dependencies: DependenciesService,
    private userService: UserService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  public triggerTitleActionBtn(val: string) {
    if (val === 'users') {
      this.router.navigate([val]);
    }
  }

  public newUser() {
    this.userChild.onSubmit();
  }

  public submit(val: { type: string; value: any }) {
    this.userService.createUser(val.value).subscribe({
      next: () => {
        this.toastr.success('User Created Successfully!');
        setTimeout(() => {
          this.router.navigate(['/users/all-user']);
        }, 2000)
      },
      error: (err) => this.toastr.error(err.message)
    })
  }

}
