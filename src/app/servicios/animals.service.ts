import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import{loginI}from '../modelo/login.interface'
import {responseI} from '../modelo/response.interface'
import {AnimalI} from '../modelo/animales.interface'
@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  url:string="http://127.0.0.1:8000/api/v1/";

  headers = new HttpHeaders();

  constructor(private http:HttpClient) { }

  login(_form:loginI)
  {
    let dir= this.url+"login";
    return this.http.post<responseI>(dir,_form);
  }

  show()
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"animales-show";
    return this.http.get<any>(dir, {headers:header});
  }

  regisAnimals(_form:AnimalI)
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"animales-reg";
    return this.http.post<any>(dir,_form,{headers:header});
  }

  editAnimal(_id:any):Observable<AnimalI>
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"animales-edit/"+_id;
    return this.http.get<AnimalI>(dir,{headers:header});
  }

  destroyAnimal(_id:any)
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"animales-dest/"+_id;
    return this.http.post<any>(dir,_id,{headers:header});
  }

  updateAnimal(_form:AnimalI,_id:any)
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"animales-updt/"+_id;
    return this.http.post<any>(dir,_form,{headers:header});
  }

  showTypeAnimal()
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"tipo-animales-show";
    return this.http.get<any>(dir, {headers:header});
  }

  
}
