import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../../services/account.service";
import {PersonDto} from "../../../../dto/personDto";

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss']
})
export class AccountDashboardComponent implements OnInit {

  person?: PersonDto;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.person = this.accountService.getPerson();
  }

}
