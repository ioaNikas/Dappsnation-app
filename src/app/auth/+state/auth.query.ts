import { Query } from '@datorama/akita';
import { AuthStore, AuthState } from './auth.store';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthQuery extends Query<AuthState> {

  constructor(protected store: AuthStore) {
    super(store);
  }

}
