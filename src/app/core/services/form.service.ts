import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { of } from 'rxjs'

import { FormBase } from '../helps/form-base'

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() {}

 

  getForm(){

  const data = [
  {
    value:null,
    key:'user',
    label:'User',
    controlType:'textbox',
    type:'text',
    order:4,
    options:[]
    
  },
  {
    value:null,
    key:'password',
    label:'Password',
    controlType:'textbox',
    type:'password',
    order:2,
    options:[]
  },
  {
    value:null,
    key:'fecha',
    label:'Fecha',
    controlType:'textbox',
    type:'date',
    order:3,
    options:[]
  },
  {
    value:'',
    key:'genero',
    label:'Genero',
    controlType:'select',
    type:'text',
    order:1,
    options:[
      {key:'M',value:'MASCULINO'},
      {key:'F',value:'FEMENINO'}
    ]
  },

]

    const form :FormBase<string>[]=data
    return of(form.sort((a,b)=>a.order - b.order));
  }

  formGroup(form:FormBase<string>[]){
    const group:any = {}
      form.map(form => {
        group[form.key]=new FormControl(form.value || null)
      })
    return new FormGroup(group);
  }


}
