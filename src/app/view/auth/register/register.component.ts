import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../../services/account.service";
import {ILocationCountry} from "../../../interfaces/location/ILocationCountry";
import {ILocationState} from "../../../interfaces/location/ILocationState";
import {ILocationCity} from "../../../interfaces/location/ILocationCity";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {IToast} from "../../../interfaces/toast/IToast";
import {IError} from "../../../interfaces/error/IError";
import {NgForm} from "@angular/forms";
import {RegisterPostDto} from "../../../dto/registerPostDto";
import {RegisterGetDto} from "../../../dto/registerGetDto";
import {IGenderType} from "../../../interfaces/person/GenderType";
import {KeyValue} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: RegisterPostDto = {};
  genders:KeyValue<string, IGenderType>[] = [];

  countries: ILocationCountry[] = [];
  states: ILocationState[] = [];
  cities: ILocationCity[] = [];

  isStates = false;
  isCities = false;

  model: RegisterGetDto = {
    countries: [],
    genderTypes: [],
    phoneCodes: [],
  };
  isPasswordsEqual = true;
  inputPasswordType = 'password';

  error?: IError;
  isSubmitted = false;
  toast: IToast = {} as IToast;


  constructor(private accountService: AccountService, private router: Router) {
    if (this.accountService.isLogged()) {
      this.router.navigateByUrl('/account/dashboard').finally();
    }
  }

  ngOnInit(): void {
    this.genders = Object.entries(IGenderType)
      .filter(([key, value]) => typeof value === "number")
      .map(([key, value]) => ({key, value:value as IGenderType})
      )


    this.accountService.registerGet()
      .subscribe(res => {
        this.model = res;
        this.countries = res.countries;
      })
  }

  onSubmit(formRef: NgForm, form: RegisterPostDto) {
    formRef.resetForm(form);
    this.error = undefined;
    this.isSubmitted = true;
    this.isPasswordsEqual = true;

    if (form?.passwordConfirm !== form?.password) {
      this.isPasswordsEqual = false;
      return;
    }


    this.accountService.registerPost(form)
      .subscribe({
        next: value => {
          this.toast.title = 'Register';
          this.toast.message = 'Register success';
          this.toast.isHidden = false;

          this.router.navigateByUrl('/account/dashboard').finally();

        },
        error: (err: HttpErrorResponse) => {
          this.error = err.error;
          this.toast.title = 'Error ' + this.error?.error;
          this.toast.message = err.error;
          this.toast.isHidden = false;
        }
      })
      .add(() => {
        this.isSubmitted = false;
      });


  }


  // TODO Change get location data on backend from locations controllers
  updateStates(countryId = 0) {
    this.form.stateId = undefined;
    this.form.cityId = undefined;
    this.isStates = false;
    this.isCities = false;
    if (countryId == undefined) {
      return;
    }


    this.accountService.registerGet(countryId)
      .subscribe(res => {
        this.model = res;
        this.states = res.countries[0].states;
        this.isStates = true;
      });
  }


  updateCities(countryId = 0, stateId = 0) {
    this.form.cityId = undefined;
    this.isCities = false;


    if (countryId == undefined || stateId == undefined) {
      return;
    }
    this.accountService.registerGet(countryId, stateId)
      .subscribe(res => {
        this.model = res;
        this.cities = res.countries[0].states[0].cities;
        this.isCities = true;
      });
  }

  showPassword() {
    if (this.inputPasswordType == 'password') {
      this.inputPasswordType = 'text';
    } else {
      this.inputPasswordType = 'password';
    }
  }


}
