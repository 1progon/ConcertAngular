import {Component, OnInit} from '@angular/core';
import {IPerformer} from "../../../interfaces/performer/IPerformer";
import {PerformerService} from "../../../services/performer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PerformersListingDto} from "../../../dto/PerformersListingDto";


@Component({
  selector: 'app-performer-list',
  templateUrl: './performer-list.component.html',
  styleUrls: ['./performer-list.component.scss']
})
export class PerformerListComponent implements OnInit {
  page: number = 1;
  componentURL = '/performers';
  model: PerformersListingDto = {
    items: [],
    pagination: {
      perPage: 20,
      pageId: this.page,
      total: 0,
      lastPage: 1
    }
  };


  constructor(private performersService: PerformerService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      let pageId: string | undefined = params['pageId'];
      this.page = pageId != undefined ? +pageId : 1;

      if (this.page < 1) {
        this.router.navigateByUrl(this.componentURL).finally();
      }

      this.performersService
        .getPerformers(this.page)
        .subscribe({
          next: res => this.model = res,
          error: err => {
            if (err.status == 404) {
              this.router
                .navigateByUrl('/404')
                .finally();
            }

          }
        })
    })


  }


}
