import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {LoginDto} from '../dto/loginDto';
import {PersonShortDto} from '../dto/personShortDto';
import {RegisterPostDto} from '../dto/registerPostDto';
import {RegisterGetDto} from "../dto/registerGetDto";
import {PersonTokenDto} from "../dto/personTokenDto";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private static readonly storagePersonName = 'pers';
  private personShortDto?: PersonShortDto;

  constructor(private http: HttpClient, private router: Router) {
  }


  /**
   * POST: request to login person on the server by email and password
   * @param {LoginDto} model
   */
  login(model: LoginDto): Observable<PersonTokenDto> {
    return this.http.post<PersonTokenDto>(environment.apiUrl + 'api/Admin/AuthPerson/Login',
      JSON.stringify(model))
      .pipe(
        map(person => {
          if (person) {
            person.accessTokenExpire = new Date(Date.parse(person.accessTokenExpire.toString()));
            this.setStorage(person);
          }
          return person;
        })
      )
  }


  /** POST: method for register person */
  registerPost(model: RegisterPostDto): Observable<PersonTokenDto> {
    return this.http.post<PersonTokenDto>(environment.apiUrl + 'api/Admin/AuthPerson/Register',
      JSON.stringify(model))
      .pipe(
        map(person => {
          if (person) {
            person.accessTokenExpire = new Date(Date.parse(person.accessTokenExpire.toString()));
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

    let person: PersonTokenDto | undefined = this.getPersonTokenDto();

    if (person) {
      return true;
    }

    this.logout();

    return false;
  }


  /**
   * Save person token to sessionStorage
   * @param person
   */
  setStorage(person: PersonTokenDto): void {
    sessionStorage.setItem(AccountService.storagePersonName, JSON.stringify(person))
  }

  logout() {
    sessionStorage.removeItem(AccountService.storagePersonName);
    // this.router.navigateByUrl('/login').finally();
  }

  getPersonFromServer(): Observable<PersonShortDto> | undefined {

    let token = this.getPersonTokenDto();
    if (!token) {
      return undefined;
    }

    return this.http
      .get<PersonShortDto>(environment.apiUrl + 'api/Admin/Person/' + token.guid)
      .pipe(map(personShortDto => {
        this.personShortDto = personShortDto;
        return personShortDto;
      }))

  }

  public getPersonTokenDto(): PersonTokenDto | undefined {
    let personTokenDto: PersonTokenDto
    let json = sessionStorage.getItem(AccountService.storagePersonName);

    if (json && json.trim() != '') {
      personTokenDto = JSON.parse(json);
      return personTokenDto;
    }

    return undefined;
  }


  public getLocalPersonShortDto(): Observable<PersonShortDto | undefined> | undefined {

    if (this.personShortDto) {
      return of(this.personShortDto);
    }

    return this.getPersonFromServer();

  }


  updateUserData(guid: string, person: PersonShortDto): Observable<any> {
    return this.http
      .put(
        environment.apiUrl + 'api/Admin/Person/' + guid,
        JSON.stringify(person))
  }

}
