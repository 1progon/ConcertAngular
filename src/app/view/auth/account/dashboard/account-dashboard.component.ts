import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../../../services/account.service";
import {PersonShortDto} from "../../../../dto/personShortDto";

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss']
})
export class AccountDashboardComponent implements OnInit {

  person?: PersonShortDto;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService.getLocalPersonShortDto()
      ?.subscribe(person => this.person = person);

  }

}
