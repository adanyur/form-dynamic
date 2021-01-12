import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }


  getFormulario(data:string){
    const URL=`http://192.168.10.144:8001/formulario/${data}`
    return this.http.get(URL).pipe(
      pluck('formulariod')
    );
  }

  postEspecialidad(data:any){
    const URL ='http://192.168.10.144/'
    return this.http.post(URL,data)
  }



}
