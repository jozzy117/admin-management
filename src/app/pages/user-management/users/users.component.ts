import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user.service';
import { DependenciesService } from './dependencies.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public title:string = '';
  public users = [];
  public selectedIds:Set<number> = new Set();
  public showActionButtons:boolean = false;
  public titleActionButtons = this.dependencies.getTitleActionButtons;
  public actionButtons = this.dependencies.getActionButtons;
  constructor(
    private dependencies: DependenciesService,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      res => {
        this.users = res;
      }
    )
  }

  public triggerTitleActionBtn(val: string) {
    if (val === 'users/new-user') {
      this.router.navigate([val]);
    }
  }

  public onRowClicked(rowObject: any) {
    console.warn(rowObject);
    this.router.navigate([`users/view-user/${rowObject.id}`]);
  }

  public onCheck (selectedIds:Set<number>){
    this.selectedIds = selectedIds
    if(!selectedIds.size){
      this.showActionButtons = false;
    }else {
      this.showActionButtons = true
    }
  }

  public onActionTrigger(val: any['value']){  
    const req = [...this.selectedIds];
    this.userService.deleteUser(req).subscribe({
      next: () => {
        this.toastr.success('Delete Successful!');
        this.getUsers();
      },
      error: (err) => this.toastr.error(err.message)
    })
  }

}
