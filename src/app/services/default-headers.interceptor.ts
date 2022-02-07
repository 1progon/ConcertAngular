import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AccountService} from "./account.service";

@Injectable()
export class DefaultHeadersInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.append('Content-Type', 'application/json');

    if (this.accountService.isLogged()) {
      headers = headers.append('Authorization', 'Bearer ' + this.accountService.getToken());
    }

    request = request.clone({headers});


    return next.handle(request);

  }
}
