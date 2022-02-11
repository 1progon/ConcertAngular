import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BreadcrumbProp, BreadCrumbsComponent} from "../../include/bread-crumbs/bread-crumbs.component";
import {EventService} from "../../../services/event.service";
import {IEvent} from "../../../interfaces/event/IEvent";
import {HttpErrorResponse} from "@angular/common/http";
import {IErrorType} from "../../../interfaces/error/IErrorType";

@Component({
  selector: 'app-event-show',
  templateUrl: './event-show.component.html',
  styleUrls: ['./event-show.component.scss']
})
export class EventShowComponent implements OnInit, BreadCrumbsComponent {
  slug = '';
  event?: IEvent;

  breadcrumbs: BreadcrumbProp = {url: '/event/' + this.event?.slug};

  constructor(private route: ActivatedRoute, private evenService: EventService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.evenService.getEvent(this.slug)
      .subscribe({
        next: value => {
          this.breadcrumbs = {url: '/event/' + value.slug, title: value.name}

          return this.event = value;
        },
        error: (err: HttpErrorResponse) => this
          .router
          .navigateByUrl('/error/' + IErrorType.NotFound).finally()
      })

  }

}
