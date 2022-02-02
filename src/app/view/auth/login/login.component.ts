import {Component} from '@angular/core';
import {AccountService, LoginModel} from "../../../services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: LoginModel = {email: '', password: ''};


  constructor(private accountService: AccountService) {
  }

  onSubmit(form: LoginModel) {
    console.log(form)
    this.accountService.login({email: form.email, password: form.password})
      .subscribe(res => console.log(res));
  }

}
