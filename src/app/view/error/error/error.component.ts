import {Component} from '@angular/core';
import {Router, UrlSegment} from "@angular/router";


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  state?: { message?: string, from?: UrlSegment[] };

  constructor(private router: Router) {
    this.state = this.router
      .getCurrentNavigation()?.extras.state
      ? this.router.getCurrentNavigation()?.extras?.state
      : {message: ''};
  }


}
