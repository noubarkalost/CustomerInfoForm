import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl , FormArray, FormBuilder, Validators} from '@angular/forms';
import { ConfirmedValidator } from './validator'
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent  {

  control!: FormControl
  currentForm:number = 0
  num: number = 1

  arr = new FormArray ([new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl (''),
    email: new FormControl('', Validators.email),
    password: new FormControl ('', [
      Validators.minLength(6), Validators.pattern("^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")
  
   ]),

   confirmPassword: new FormControl ('', [
    Validators.minLength(6), Validators.pattern("^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")
  ])

  })])


  
  
  onSubmit() {
    console.log ('hello world')
  }
  constructor(private fb: FormBuilder) {}
  

  addForm() {
    const form =  new FormGroup ({
      firstName: new FormControl(''),
      lastName: new FormControl (''),
      email: new FormControl('', Validators.email),
      password: new FormControl ('', [
        Validators.minLength(6), Validators.pattern("^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")]),
     

        confirmPassword: new FormControl ('', [
          Validators.minLength(6), Validators.pattern("^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")
        ])
    })
    
    this.num += 1
    if (this.arr.length < 10) {
      this.arr.push(form)
    }
  }

  deleteForm(i:number){
 
   
      this.currentForm = i
      if(i>0){
        this.arr.removeAt(i)
      
    }
  }
  submit(){
    console.log(this.arr.controls[this.currentForm].value);
  }

  checkPassword () {
    const password = this.arr.controls[0]?.get('password')?.value
    const confirmPassword = this.arr.controls[0]?.get('confirmPassword')?.value

  
    console.log( password , confirmPassword, this.arr.controls[0].get('firstName')?.value )
    return password === confirmPassword 
    }
    
}
