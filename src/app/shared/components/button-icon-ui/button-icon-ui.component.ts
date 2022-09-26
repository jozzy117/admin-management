import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-icon-ui',
  templateUrl: './button-icon-ui.component.html',
  styleUrls: ['./button-icon-ui.component.css']
})
export class ButtonIconUiComponent implements OnInit {

  @Input() name?: string;
  @Input() iconClass?: string;
  @Input() value: any;
  @Input() buttonType: 'button' | 'menu' | 'reset' | 'submit' = 'submit'
  @Input() iconPosition: 'left' | 'right' = 'left'
  @Input() classNames!: string | undefined;
  @Input() tooltip!: string | undefined;
  @Input() isDisabled: boolean = false;
  @Input() icon?: string;
  @Output() clickEmit: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public trigger(val:any) {
    this.clickEmit.emit(val);
  }

}
