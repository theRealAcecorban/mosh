import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
    'username': new FormControl('', 
        Validators.required,
        UsernameValidators.userExists),
    'password': new FormControl('', Validators.required)      
    })
  });

  get username() {
    return this.form.get('account.username');
  }

  login() {
//    let valid = authService.login(this.form.value);
    let valid = false;
    if(!valid) {
      this.form.setErrors({
        invalidLogin: true
      });
    }
  }
}
