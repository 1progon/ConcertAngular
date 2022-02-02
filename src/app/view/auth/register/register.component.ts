import {Component, OnInit} from '@angular/core';
import {RegisterModel} from "../../../services/account.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: RegisterModel = {email: '', password: '', passwordConfirm: ''};
  isPasswordsEqual = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: RegisterModel) {
    if (form.passwordConfirm !== form.password) {
      this.isPasswordsEqual = true;
      return;
    }


  }
}
