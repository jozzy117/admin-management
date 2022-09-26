import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { IUser } from '../../models/user-interface';

@Component({
  selector: 'app-table-ui',
  templateUrl: './table-ui.component.html',
  styleUrls: ['./table-ui.component.css']
})
export class TableUiComponent implements OnInit {

  displayedColumns: string[] = ['select', 'firstName', 'middleName', 'lastName', 'bvn', 'occupation'];

  @Input() dataSource!: IUser[];
  @Input() selectedIds: Set<number> = new Set();
  @Output() rowClick: EventEmitter<any> = new EventEmitter();
  @Output() checkboxCheckEmit: EventEmitter<any> = new EventEmitter();

  public masterCheckboxChecked!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  public triggerRowClick(rowId: number) {
    this.rowClick.emit(rowId)
  }

  public onCheck(event: MatCheckboxChange, item: any) {
    if (this.masterCheckboxChecked) this.masterCheckboxChecked = false;
    const elemCount = this.dataSource.length;
    this.dataSource.map((d: any) => {
      if (d.id === item.id) d.checked = event.checked;
      if (d.checked) {
        this.selectedIds.add(d.id);
      } else {
        this.selectedIds.delete(d.id);
      }
    });
    if (this.selectedIds.size === elemCount) this.masterCheckboxChecked = true;
    this.checkboxCheckEmit.emit(this.selectedIds);
  }

  public onCheckAll(event: MatCheckboxChange) {
    this.masterCheckboxChecked = event.checked;
    this.dataSource.forEach((element: any) => {
      element.checked = event.checked;
    });
    this.selectedIds = new Set(this.dataSource.map((val) => val.id));
    event.checked
      ? this.checkboxCheckEmit.emit(this.selectedIds)
      : this.checkboxCheckEmit.emit(new Set());
  }

  public unCheckAll() {
    this.masterCheckboxChecked = false;
    this.dataSource.forEach((element: any) => {
      element.checked = false;
    });
  }

}
