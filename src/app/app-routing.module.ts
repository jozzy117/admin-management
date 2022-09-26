import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { AdminGuard } from './shared/helper/admin.guard';
import { AuthGuard } from './shared/helper/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(
      (m) => m.DashboardModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => LoginModule,
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/user-management/user-management.module').then(
      (m) => m.UserManagementModule
    ),
    canActivate: [AuthGuard, AdminGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
