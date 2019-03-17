import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { AuthService, User, AuthQuery } from '../+state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-connexion-tools',
  templateUrl: './connexion-tools.component.html',
  styleUrls: ['./connexion-tools.component.css']
})
export class ConnexionToolsComponent implements OnInit {

  @Output() loggedOut = new EventEmitter();

  public user$: Observable<User>;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private authQuery: AuthQuery
    ) { }

  ngOnInit() {
    this.user$ = this.authQuery.select(state => state.user);
  }

  public openLoginComponent() {
    this.dialog.open(LoginComponent);
  }

  public async logout() {
    await this.authService.logout();
    this.loggedOut.emit();
  }

}
