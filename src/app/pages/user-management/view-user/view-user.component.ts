import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfoComponent } from 'src/app/shared/components/user-info/user-info.component';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  @ViewChild(UserInfoComponent) userChild!: UserInfoComponent;
  public disableForm:boolean = true;
  public formValues: any;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    this.userService.getUserById(this.route.snapshot.params['id']).subscribe(
      res => {
        this.formValues = res;
      }
    )
  }

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
    this.userService.updateUser(this.route.snapshot.params['id'], val.value).subscribe({
      next: () => this.disableForm = true,
      error: (err) => this.toastr.error(err.message)
    })
  }

}
