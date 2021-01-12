import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms'
import { Observable , of} from 'rxjs'


import { FormService } from '../core/services/form.service';
import { HttpService } from '../core/services/http.service';
import { FormBase } from '../core/helps/form-base'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  forms$:Observable<FormBase<any>[]>;
  value$:Observable<any>;
  form:FormGroup;
  
  formulario:any


  constructor(private formService:FormService,private fb:FormBuilder,private httpService:HttpService
              ) { }

  ngOnInit(): void {
    this.form = this.fb.group({})
  }


onForm(data:string){  
  this.httpService.getFormulario(data).subscribe((data:FormBase<string>[])=>{  
    this.form = this.formService.formGroup(data)
    this.formulario=data.sort((a,b)=> a.order - b.order)
  })
}


onSubmit(){
//  this.value$ = this.httpService.getFormulario(this.form.value)
  this.value$ = of(this.form.value)
}


}
