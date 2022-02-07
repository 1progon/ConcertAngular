import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {LoginDto} from '../dto/loginDto';
import {PersonDto} from '../dto/personDto';
import {RegisterPostDto} from '../dto/registerPostDto';
import {RegisterGetDto} from "../dto/registerGetDto";


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private static readonly storagePersonName = 'pers';

  constructor(private http: HttpClient) {
  }


  /**
   * POST: request to login person on the server by email and password
   * @param {LoginDto} model
   */
  login(model: LoginDto): Observable<PersonDto> {
    return this.http.post<PersonDto>(environment.apiUrl + 'api/Admin/AuthPerson/Login',
      JSON.stringify(model))
      .pipe(
        map(person => {
          if (person) {
            this.setStorage(person);
          }
          return person;
        })
      )
  }


  /** POST: method for register person */
  registerPost(model: RegisterPostDto): Observable<PersonDto> {
    return this.http.post<PersonDto>(environment.apiUrl + 'api/Admin/AuthPerson/Register',
      JSON.stringify(model))
      .pipe(
        map(person => {
          if (person) {
            this.setStorage(person);
          }
          return person;
        })
      )
  }


  /** GET: Get data for person register form */
  registerGet(countryId = 0, stateId = 0) {
    let params = new HttpParams();
    if (countryId != 0) {
      params = params.append('countryId', countryId);
    }

    if (stateId != 0) {
      params = params.append('stateId', stateId);
    }

    return this.http.get<RegisterGetDto>(environment.apiUrl + 'api/Admin/AuthPerson/Register',
      {
        params: params
      })
  }


  /**
   * Check if user logged in
   * @return boolean
   */
  isLogged(): boolean {

    let person = this.getPerson();

    if (person) {
      if (person.timestamp >= Date.now()) {
        return true;
      } else {
        this.clearStorage();
      }
    }

    return false;
  }


  /**
   * Save person token to sessionStorage
   * @param person
   */
  setStorage(person: PersonDto): void {
    person.timestamp = Date.parse(person.tokenExpire.toString());

    sessionStorage.setItem(AccountService.storagePersonName, JSON.stringify(person))
  }

  clearStorage() {
    sessionStorage.removeItem(AccountService.storagePersonName);
  }

  getPerson(): PersonDto | undefined {
    let item = sessionStorage.getItem(AccountService.storagePersonName);

    if (item && item.trim() != '') {
      return JSON.parse(item);
    }

    return undefined;
  }

  public getToken(): string {
    let person: PersonDto
    let json = sessionStorage.getItem(AccountService.storagePersonName);

    if (json && json.trim() != '') {
      person = JSON.parse(json);
      return person.token;
    }

    return '';
  }


  updateUserData(hashId: string, person: PersonDto): Observable<any> {
    return this.http.put(environment.apiUrl + 'api/Admin/Person/' + hashId,
      JSON.stringify(person))
  }

}
