import {Component} from '@angular/core';
import {AccountService} from "../../../services/account.service";
import {Router} from "@angular/router";
import {IError} from "../../../interfaces/error/IError";
import {HttpErrorResponse} from "@angular/common/http";
import {LoginDto} from "../../../dto/loginDto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: LoginDto = {
    email: '',
    password: ''
  };
  error?: IError;
  isSubmitted = false;

  constructor(private accountService: AccountService, private router: Router) {
    if (this.accountService.isLogged()) {
      this.router.navigateByUrl('/account/dashboard').finally();
    }
  }

  onSubmit(form: LoginDto) {
    this.isSubmitted = true;
    this.error = undefined;

    this.accountService
      .login({email: form.email, password: form.password})
      .subscribe({
        next: (res) => {
          this.router.navigateByUrl('/account/dashboard').finally();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err)
          this.error = err.error;
        }
      })
      .add(() => this.isSubmitted = false);
  }

}
