import {Component, OnInit} from '@angular/core';
import {VenueService} from "../../../services/venue.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IVenue} from "../../../interfaces/venue/IVenue";
import {BaseListingDto} from "../../../dto/baseListingDto";
import {IPaginated} from "../../../interfaces/pagination/IPaginated";


@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.scss']
})
export class VenueListComponent implements OnInit, IPaginated {
  page: number = 1;
  componentURL = '/venues';
  model: BaseListingDto<IVenue> = {
    items: [],
    pagination: {
      total: 0,
      perPage: 20,
      pageId: this.page,
      lastPage: 1
    }
  };


  constructor(private venuesService: VenueService,
              private route: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let pageId: number = !isNaN(params['pageId']) ? +(params['pageId']) : 1;
      if (pageId < 1) {
        this.router.navigateByUrl(this.componentURL).finally();
      }
      this.page = pageId;


      this.venuesService
        .getVenues(pageId)
        .subscribe({
          next: res => this.model = res,
          error: err => {
            if (err.status == 404) {
              this.router.navigateByUrl('/404').finally();
            }
          }
        });
    });


  }

}
