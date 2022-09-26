import { Component, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserInfoComponent } from 'src/app/shared/components/user-info/user-info.component';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @ViewChild(UserInfoComponent) userChild!: UserInfoComponent;
  public disableForm:boolean = true;
  public formValues = JSON.parse(localStorage.getItem('user') || '');
  constructor(
    private toastr: ToastrService,
    private userService: UserService,
  ) { }

  public edit() {
    this.disableForm = false;
  }
  public cancel() {
    this.disableForm = true;
  }
  public update() {
    this.userChild.onSubmit();
  }
  public submit(val: { type: string; value: any }) {
    this.userService.updateUserProfile(val.value).subscribe({
      next: () => {
        this.disableForm = true;
        this.formValues = JSON.parse(localStorage.getItem('user') || '');
      },
      error: (err) => this.toastr.error(err.message)
    })
  }
}
