import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AccountService} from "../services/account.service";
import {IError} from "../interfaces/error/IError";
import {IErrorType} from "../interfaces/error/IErrorType";
import {PersonType} from "../interfaces/person/PersonType";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (this.accountService.isLogged()) {
      let person = this.accountService.getPerson();
      if (person?.type == PersonType.Admin) {
        return true;
      }
    }

    this.router.navigateByUrl(
      `/error/${IErrorType.Unauthorized}`,
      {state: {code: IErrorType.Unauthorized, error: 'Only admin can be here'} as IError})
      .finally();


    return false;
  }

}
