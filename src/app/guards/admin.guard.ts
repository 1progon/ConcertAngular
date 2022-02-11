import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AccountService} from "../services/account.service";
import {IError} from "../interfaces/error/IError";
import {IErrorType} from "../interfaces/error/IErrorType";
import {PersonType} from "../interfaces/person/PersonType";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {


    if (this.accountService.isLogged()) {

      let person = this.accountService.getLocalPersonShortDto();

      if (!person) {
        return false;
      }

      return person.pipe(map(person => {
        if (!person) {
          return false;
        }
        if (person.type == PersonType.Admin) {
          return true;
        }
        this.router.navigateByUrl(`/error/${IErrorType.Unauthorized}`).finally();
        return false;
      }));

    }


    return false;

  }

}
