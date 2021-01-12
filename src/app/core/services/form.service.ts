import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBase } from '../helps/form-base'


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() {}
   
  formGroup(form:FormBase<string>[]){
    const group:any = {}
      form.map(form => {
        group[form.key] = new FormControl(form.value || null)
      })
    return new FormGroup(group);
  }


}
