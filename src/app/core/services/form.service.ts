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
    order:1,
    options:[],
    optionRadio:[]
    
  },
  {
    value:null,
    key:'city',
    label:'City',
    controlType:'select',
    type:'text',
    order:2,
    options:[
      {key:'L',value:'LIMA'},
      {key:'A',value:'AREQUIPA'}
    ],
    optionRadio:[]
  },{
    value:null,
    key:'genero',
    label:'Genero',
    controlType:'radio',
    type:'radio',
    order:3,
    options:[],
    optionRadio:[
      {key:"M",value:"MASCULINO",name:"genero",},
      {key:"F",value:"FEMENINO",name:"genero"}
    ]
  }

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
