import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersistNgFormPlugin } from '@datorama/akita';
import { UserForm, AuthQuery, AuthService } from '../+state';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public signinForm: FormGroup;
  public signupForm: FormGroup;
  public persistForm: PersistNgFormPlugin<UserForm>;

  constructor(
    private builder: FormBuilder,
    private authQuery: AuthQuery,
    private authService: AuthService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private router: Router,
    ) { }

  ngOnInit() {
    this.signinForm = this.builder.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required],
    });

    this.signupForm = this.builder.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required],
    });

    this.persistForm = new PersistNgFormPlugin(this.authQuery, 'form');
    this.persistForm.setForm(this.signinForm);
  }

  public async signin() {
    try {
      const {email, pwd} = this.signinForm.value;
      await this.authService.signin(email, pwd);
      this.dialogRef.close();
    } catch (err) {
      console.error(err);
    }
    this.router.navigate(['/home']);
  }

  public async signup() {
    try {
      const { email, pwd } = this.signupForm.value;
      await this.authService.signup(email, pwd);
      this.dialogRef.close();
    } catch (err) {
      console.error(err);
    }
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.persistForm.destroy();
  }

}
