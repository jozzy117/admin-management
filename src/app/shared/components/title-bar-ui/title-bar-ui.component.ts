import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TitleActionBtnType } from '../../models/title-actionBar';

@Component({
  selector: 'app-title-bar-ui',
  templateUrl: './title-bar-ui.component.html',
  styleUrls: ['./title-bar-ui.component.css']
})
export class TitleBarUiComponent implements OnInit {

  @Input() title:string = 'Title?';
  @Input() titleActionButtons: TitleActionBtnType[] = [];
  @Output() triggerTitleActionBtn: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public trigger(val:string){
    this.triggerTitleActionBtn.emit(val)
  }

}
