import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from "@angular/router";
import {IError} from "../../../interfaces/error/IError";
import {IErrorType} from "../../../interfaces/error/IErrorType";


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  model?: IError;
  code: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
    let state = this.router.getCurrentNavigation()?.extras.state as IError;
    this.code = +this.route.snapshot.params['code'] ?? 0;

    if (state) {
      if (!state.code || state.code != this.code) {
        this.switchRoute(this.code);
        return;
      }


      if (!state.error || state.error.trim() == '') {
        this.switchRoute(this.code);
        return;
      }

      this.model = state;

      return;
    }

  }

  ngOnInit(): void {

    if (!this.model) {
      let routeCode: number = +this.route.snapshot.params['code'] ?? 0;
      this.switchRoute(routeCode);
    }


  }

  switchRoute(code: number) {

    switch (code) {
      case IErrorType.BadRequest:
        this.model = {code, error: 'Bad request'}
        break;
      case IErrorType.Unauthorized:
        this.model = {code, error: 'Unauthorized'}
        break;
      case IErrorType.ServerError:
        this.model = {code, error: 'Server error'}
        break;
      default:
        this.model = {code: 404, error: 'Page not found'}
        break;

    }

    return;

  }


}
