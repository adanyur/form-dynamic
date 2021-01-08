import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms'
import { Observable , of} from 'rxjs'


import { FormService } from '../core/services/form.service';
import { FormBase } from '../core/helps/form-base'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  forms$:Observable<FormBase<any>[]>;
  form:FormGroup;
  value$:Observable<any>;
  constructor(private formService:FormService) { }

  ngOnInit(): void {
    this.forms$ = this.formService.getForm()
    this.add()
  }


add(){
  this.formService.getForm().subscribe((data:FormBase<string>[])=>{
    this.form = this.formService.formGroup(data)
  })
}

onSubmit(){
  this.value$ =  of(this.form.value)
}


}
