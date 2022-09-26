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
      value: 'users',
      type: 'btn',
      icon: 'reply',
      iconClass: '',
      tooltip: 'Back',
      classNames: 'btn ',
      clickType: 'route'
    }
  ];

  public get getTitleActionButtons(): TitleActionBtnType[] {
    return this.titleActionButtons;
  }
}
