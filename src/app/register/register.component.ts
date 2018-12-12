import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { usernameValidators } from './username.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})




export class RegisterComponent implements OnInit {
  form = new FormGroup({
    username:new FormControl("" , [Validators.required,
    Validators.minLength(3),
    Validators.pattern("angular"),
    usernameValidators.cannotcontainSpace
    ])
  });

  get username(){
   return this.form.get('username');
  }

  constructor() { }

  ngOnInit() {
  }

}
