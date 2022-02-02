import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {headerDefault} from "../../config";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IPerson} from "../interfaces/person/IPerson";

export interface LoginModel {
  email: string;
  password: string;

}

export interface RegisterModel {
  email: string;
  password: string;
  passwordConfirm: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  login(model: LoginModel): Observable<IPerson> {
    return this.http.post<IPerson>(environment.apiUrl + 'api/Admin/Person/Login',
      JSON.stringify(model),
      {
        headers: {
          ...headerDefault.headers
        }
      })
  }

  register(model: RegisterModel): Observable<IPerson> {
    return this.http.post<IPerson>(environment.apiUrl + 'api/Admin/Person/Register',
      JSON.stringify(model),
      {
        headers: {
          ...headerDefault.headers
        }
      })
  }

}
