import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event-show',
  templateUrl: './event-show.component.html',
  styleUrls: ['./event-show.component.scss']
})
export class EventShowComponent implements OnInit {
  slug = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
  }

}
