import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl , FormArray, FormBuilder, Validators} from '@angular/forms';
import { ConfirmedValidator } from './validator'
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  customerInfo = new FormGroup ({
    firstName: new FormControl('FirstName'),
    lastName: new FormControl ('LastName'),
    email: new FormControl("Email", Validators.email),
    password: new FormControl ('Password', [
      Validators.minLength(6), Validators.pattern("^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")
  
    ])
  });
  
  
  onSubmit() {
    console.log ('hello world')
  }
  constructor(private fb: FormBuilder) {
  
    this.customerInfo = fb.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    })
  }
    
  get f(){
    return this.customerInfo.controls;
  }

  addForm() {
    console.log('to add')
  }

  deleteForm(){
    console.log('to delete')
  }
  submit(){
    console.log(this.customerInfo.value);
  }

  ngOnInit(): void {
  }

}
