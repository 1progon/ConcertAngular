import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PaginationDto} from "../../../dto/PaginationDto";


@Component({
  selector: 'app-pagination [pagination] [componentURL]',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() componentURL?: string;
  @Input() pagination: PaginationDto = {
    total: 1,
    perPage: 20,
    pageId: 1,
    lastPage: 1
  };

  isPrevious = true;
  isNext = true;


  ngOnChanges(changes: SimpleChanges): void {
    let val = changes['pagination'].currentValue;
    this.isPrevious = val.pageId > 1;
    this.isNext = val.lastPage > val.pageId;
  }
}
