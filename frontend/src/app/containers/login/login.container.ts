import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MainService } from '../../services/main.service';

@Component({
  templateUrl: './login.container.html',
  styleUrls: [ './login.container.scss' ]
})
export class LoginComponent {

  constructor(private main: MainService,
              private router: Router,
              private snackBar: MatSnackBar) {}

  onLogin(login: { roll: string, password: string }) {
    this.main.login(login.roll, login.password)
      .subscribe(
        () => this.router.navigate([ 'home' ]),
        (err) => this.snackBar.open(err, '', {
          duration: 3000
        }));
  }

}