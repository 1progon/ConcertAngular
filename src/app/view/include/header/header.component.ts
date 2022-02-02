import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {headerDefault} from "../../../../config";
import {IPerformerCategory} from "../../../interfaces/performer/IPerformerCategory";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSubMenuShow = false;

  performerCategories: IPerformerCategory[] = [];
  auth: { user: {}, auth: boolean } = {auth: false, user: {}};

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<IPerformerCategory[]>(environment.apiUrl + 'api/Homepage',
      {
        headers: {
          ...headerDefault.headers,
        }
      })
      .subscribe(res => this.performerCategories = res)
  }

}
