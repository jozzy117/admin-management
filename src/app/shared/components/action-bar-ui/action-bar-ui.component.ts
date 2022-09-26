import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar-ui',
  templateUrl: './action-bar-ui.component.html',
  styleUrls: ['./action-bar-ui.component.css']
})
export class ActionBarUiComponent implements OnInit {
  @Input() actionButtons: any[] = [];
  @Input() showActionButtons: boolean = false;
  @Output() actionEmit: EventEmitter<any['value']> =
    new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public evalClass(val: any['value']) {
    if (val === 'reject' || val === 'disable') {
      return 'bg-danger';
    }
    return 'bg-success';
  }

  public actionToggled(val: any['value']) {
    this.actionEmit.emit(val);
  }

}
