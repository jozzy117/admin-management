import { Injectable } from '@angular/core';
import { TitleActionBtnType } from 'src/app/shared/models/title-actionBar';

@Injectable({
  providedIn: 'root'
})
export class DependenciesService {

  constructor() { }

  private titleActionButtons: TitleActionBtnType[] = [
    {
      name: '',
      value: 'users/new-user',
      type: 'btn',
      icon: 'person_add',
      iconClass: 'light_color',
      tooltip: 'Create new user',
      classNames: 'btn primary_background',
      clickType: 'route'
    }
  ];

  private actionButtons: any[] = [
    {
      name: 'Delete',
      value: 'delete',
    }
  ];

  public get getTitleActionButtons(): TitleActionBtnType[] {
    return this.titleActionButtons;
  }
  public get getActionButtons(): TitleActionBtnType[] {
    return this.actionButtons;
  }
}
