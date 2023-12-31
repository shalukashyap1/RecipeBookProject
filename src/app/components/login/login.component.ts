import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm = new FormGroup({
  userName: new FormControl('', [Validators.required, Validators.email]),
  pass: new FormControl('',[Validators.required,Validators.minLength(6)])
    
  })
  get f() {
    return this.userForm.controls;
  }

  userData() {
    console.log(this.userForm);
    console.log(this.userForm.value);
    this.userForm.reset();
  }
}
