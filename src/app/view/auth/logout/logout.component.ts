import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  template: '',
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) {
  }

  ngOnInit(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/login').finally();
  }

}
