import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import{AnimalsService}from 'src/app/servicios/animals.service'
import{loginI}from '../modelo/login.interface'
import {responseI} from '../modelo/response.interface'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public _form = new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(private api:AnimalsService,private router:Router) { }

  ngOnInit(): void {
  }

  login(_form:loginI){
    this.api.login(_form).subscribe(data=>
      {
     let dataresponse:responseI=data;
     localStorage.setItem("token",dataresponse.accesToken);
     this.router.navigate(['animales']);
     (console.log(data))
      }
     
     )
    }

    cambio()
    {
      this.router.navigate(['registro']);
    }
}
