import {Component, OnInit} from '@angular/core';
import {EventService} from "../../../services/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IPaginated} from "../../../interfaces/pagination/IPaginated";
import {IEvent} from "../../../interfaces/event/IEvent";
import {BaseListingDto} from "../../../dto/baseListingDto";


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, IPaginated {
  page: number = 1;
  componentURL = '/events';

  model: BaseListingDto<IEvent> = {
    items: [],
    pagination: {
      total: 0,
      perPage: 20,
      pageId: this.page,
      lastPage: 1,
    }
  };


  constructor(private eventService: EventService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.page = !isNaN(params['pageId']) ? +(params['pageId']) : 1;
      this.model.pagination.pageId = this.page;

      if (this.page < 1) {
        this.router.navigateByUrl(this.componentURL).finally();
      }

      this.eventService
        .getEvents(this.page)
        .subscribe({
            next: res => this.model = res,
            error: err => {

              this.router.navigateByUrl('/404').finally()
            }

          }
        );

    })


  }


}
