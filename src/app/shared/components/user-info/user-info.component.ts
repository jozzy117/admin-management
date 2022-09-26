import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit, OnChanges {

  @Output() nextEmit: EventEmitter<any> = new EventEmitter();
  public form!: FormGroup;
  @Input() formValues: any;
  @Input() disableForm: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
     this.populateForm();
  }

  ngOnInit(): void {
    this.initForm();
    this.populateForm();
  }

  private initForm() {
    this.form = this.fb.group({
      firstName: new FormControl('',Validators.required),
      middleName: new FormControl(''),
      lastName: new FormControl('', Validators.required),
      bvn: new FormControl('', [Validators.required]),
      occupation: new FormControl('', [Validators.required]),
    });
    
  }

  private populateForm() {
    if (!this.form || !this.formValues) return;
    this.form.patchValue(this.formValues);
    if (!this.disableForm) {
      this.form.enable()
      return
    };
    this.form.disable();
  }

  public onSubmit() {
    if (!this.form.valid) {
      return;
    }
    this.nextEmit.emit({ type: 'basic', value: this.form.value });
  }

}
