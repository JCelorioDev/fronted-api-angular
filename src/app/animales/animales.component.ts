import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { from } from 'rxjs';
import{AnimalsService}from 'src/app/servicios/animals.service'
import {responseI} from '../modelo/response.interface'
import { Router } from '@angular/router'
import {AnimalI}from '../modelo/animales.interface'
@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  public _form = new FormGroup({
    id_tiposanimal: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required)
  })

  animales:any =[];
  tiposanimal:any =[];
  button:boolean=true;
  
  constructor(public api:AnimalsService,private router:Router) { }

  ngOnInit(): void {
    this.animales= this.api.show().subscribe(res=>this.animales=res);
    this.tiposanimal= this.api.showTypeAnimal().subscribe(res=>this.tiposanimal=res);
  }

  registro(_form:AnimalI){
    this.api.regisAnimals(_form).subscribe(data=>(console.log(data)));
  }

  edit(_id:any){
    localStorage.setItem("id",_id);
    this.button=false
   this.api.editAnimal(_id).subscribe(data=>{ 
         let t:AnimalI=data;
         this._form.setValue({
        'id_tiposanimal':t.id_tiposanimal,
        'nombre':this.tiposanimal,
        'imagen':t.imagen,

           });
           (console.log(data))
    });
   }

   destroy(_id:any){
    this.api.destroyAnimal(_id).subscribe(data=>(console.log(data)));
   }

   update(_form:AnimalI){
    let _id=localStorage.getItem("id")
    this.api.updateAnimal(_form,_id).subscribe(data=>(console.log(data)));
   }

}
