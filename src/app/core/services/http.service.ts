import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, pluck, debounceTime } from 'rxjs/operators';

import { FormBase } from '../helps/form-base'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }


  getFormulario(data:string){
    const URL=`http://192.168.10.144:8001/formulario/${data}`
    return this.http.get(URL).pipe(
      pluck('formulariod'),
      map((data:FormBase<string>[])=> data.sort((a,b)=> a.order - b.order))
    );
  }

  getEspecialidad(){
    const URL ='http://192.168.10.144:8080/api/auth/especialidades'
    return this.http.get(URL)
  }

  postEspecialidad(data:any){
    const URL ='http://192.168.10.144:8080/api/auth/especialidades'
    return this.http.post(URL,data)
  }

  postRol(data:any){
    const URL ='http://192.168.10.144:8080/api/auth/rols'
    return this.http.post(URL,data)
  }


  getProgamacion(fecha:string){
    return this.http.get(`http://192.168.10.144:8082/api/programacion/${fecha}`)
  }
  


}
