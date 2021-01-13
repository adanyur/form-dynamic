import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms'
import { interval, fromEvent,Observable, of } from 'rxjs'


import { FormService } from '../core/services/form.service';
import { HttpService } from '../core/services/http.service';
import { FormBase } from '../core/helps/form-base'
import { switchMap,debounceTime,delay,filter,map } from 'rxjs/operators';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  forms$:Observable<FormBase<string>[]>;
  value$:Observable<any>;
  especialidad$:Observable<any>;
  data$:Observable<any>;

  form:FormGroup;
  formulario:FormBase<string>[]


  constructor(private formService:FormService,private fb:FormBuilder,private httpService:HttpService
              ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      fecha:[null]
    })
    // this.especialidad$ = this.httpService.getEspecialidad()  
    // this.data$ = this.form.get('fecha').value.subscribe(console.log)
                // pipe(
                //   debounceTime(1000),
                //   map(data => data.replace(/-/g,'')),
                //   switchMap((data:string)=> this.httpService.getProgamacion(data))
                // )
  }

  
// getEspecialidad(){
//   return this.httpService.getEspecialidad()
// }

getPro(data:any){
  const fecha=data.replace(/-/g,'')
  this.data$ = this.httpService.getProgamacion(fecha)
}


onForm(data:string){  
  this.httpService.getFormulario(data).subscribe((data:FormBase<string>[])=>{  
    this.form = this.formService.formGroup(data)
    this.formulario = data
  })
}


onSubmit(){
  //  this.value$ = this.httpService.postEspecialidad(this.form.value).pipe()  
  //  this.especialidad$ = this.getEspecialidad().pipe(debounceTime(2000))
  //  this.getEspecialidad().subscribe(console.log)
  //  this.httpService.getEspecialidad().subscribe(console.log)

    of([1,2,3,4]).pipe(debounceTime(1000)).subscribe(console.log)
    interval(1000).pipe(debounceTime(1000)).subscribe(console.log)

   
  //this.value$ = this.httpService.postRol(this.form.value)
  //this.value$ = of(this.form.value)
}


}
