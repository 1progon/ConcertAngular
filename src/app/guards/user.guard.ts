import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AccountService} from "../services/account.service";
import {PersonType} from "../interfaces/person/PersonType";
import {IErrorType} from "../interfaces/error/IErrorType";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.accountService.isLogged()) {
      let person = this.accountService.getPerson();

      if (person?.type == PersonType.User
        || person?.type == PersonType.Admin) {
        return true;
      }
    }

    this.router.navigateByUrl(`/error/${IErrorType.Unauthorized}`).finally();

    return false;
  }

}
