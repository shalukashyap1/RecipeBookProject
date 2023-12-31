import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  successMsg: string = '';
  userForm = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userName: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]+$')]),
    city: new FormControl(),
    
  })
  get f() {
    return this.userForm.controls;
  }

  userData() {
    console.log(this.userForm);
    console.log(this.userForm.value);
    this.userForm.reset();
    confirm(this.successMsg = 'Successfully Registerd');
  }

}
