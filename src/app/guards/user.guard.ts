import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {concatWith, Observable} from 'rxjs';
import {AccountService} from "../services/account.service";
import {map} from "rxjs/operators";
import {PersonType} from "../interfaces/person/PersonType";
import {IErrorType} from "../interfaces/error/IErrorType";
import {LoginComponent} from "../view/auth/login/login.component";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
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

        if (person.type == PersonType.Admin || person.type == PersonType.User) {
          return true;
        }
        this.router.navigateByUrl(`/error/${IErrorType.Unauthorized}`).finally();
        return false;
      }));


    }


    return false;
  }

}
