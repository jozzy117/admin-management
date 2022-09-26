import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes = [
  {
    path: '',
    redirectTo:'all-user',
    pathMatch: 'full'
  },
  {
    path: 'all-user',
    component: UsersComponent,
    pathMatch: 'full',
  },
  {
    path: 'new-user',
    component: NewUserComponent,
    pathMatch: 'full',
  },
  {
    path: 'view-user/:id',
    component: ViewUserComponent,
    pathMatch: 'full',
  }
]

@NgModule({
  declarations: [
    UsersComponent,
    NewUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UserManagementModule { }
