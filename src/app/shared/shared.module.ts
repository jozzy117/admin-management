import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { TableUiComponent } from './components/table-ui/table-ui.component';
import { TitleBarUiComponent } from './components/title-bar-ui/title-bar-ui.component';
import { ButtonIconUiComponent } from './components/button-icon-ui/button-icon-ui.component';
import { ActionBarUiComponent } from './components/action-bar-ui/action-bar-ui.component';

@NgModule({
  declarations: [
    UserInfoComponent,
    TableUiComponent,
    TitleBarUiComponent,
    ButtonIconUiComponent,
    ActionBarUiComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    UserInfoComponent,
    TableUiComponent,
    TitleBarUiComponent,
    ButtonIconUiComponent,
    ActionBarUiComponent
  ]
})
export class SharedModule { }
