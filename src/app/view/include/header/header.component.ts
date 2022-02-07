import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {IPerformerCategory} from "../../../interfaces/performer/IPerformerCategory";
import {AccountService} from "../../../services/account.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSubMenuShow = false;

  performerCategories: IPerformerCategory[] = [];
  auth: { user: {}, auth: boolean } = {auth: false, user: {}};

  constructor(private http: HttpClient, public accountService: AccountService) {
  }

  ngOnInit(): void {
    this.http.get<IPerformerCategory[]>(environment.apiUrl + 'api/Homepage')
      .subscribe(res => this.performerCategories = res)
  }

}
