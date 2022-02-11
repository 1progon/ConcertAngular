import {Component, Input} from '@angular/core';

export interface BreadcrumbProp {
  url: string;
  title?: string;
}


@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent {
  @Input() breadcrumbs: BreadcrumbProp = {url: ''};

}
