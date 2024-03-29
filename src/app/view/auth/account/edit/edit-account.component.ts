import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../../../services/account.service";
import {Router} from "@angular/router";
import {IError} from "../../../../interfaces/error/IError";
import {HttpErrorResponse} from "@angular/common/http";
import {IToast} from "../../../../interfaces/toast/IToast";
import {NgForm} from "@angular/forms";
import {PersonShortDto} from "../../../../dto/personShortDto";

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
  model?: PersonShortDto = {} as PersonShortDto;
  isSubmitted = false;
  error?: IError;
  toast: IToast = {} as IToast;

  constructor(private accountService: AccountService, private router: Router) {
  }

  ngOnInit(): void {
    this.accountService.getLocalPersonShortDto()
      ?.subscribe(person => this.model = person);
  }

  onSubmit(formRef: NgForm, model?: PersonShortDto) {
    this.isSubmitted = true;
    this.error = undefined;

    if (model) {
      this.accountService.updateUserData(model.guid, model)
        .subscribe(
          {
            next: res => {
              this.toast.isHidden = false;
              this.toast.title = 'Edit user';
              this.toast.message = 'Success updated';
            },
            error: (err: HttpErrorResponse) => {
              this.error = err.error;
              this.toast.isHidden = false;
              this.toast.title = 'Error ' + err.status;
              this.toast.message = 'Error, try again or next time!'
              this.accountService.logout();
              this.router.navigateByUrl(`/error/${err.status}`).finally();
            },
          }
        ).add(() => {
        formRef.resetForm(model);
        return this.isSubmitted = false;
      })

    }
  }
}
