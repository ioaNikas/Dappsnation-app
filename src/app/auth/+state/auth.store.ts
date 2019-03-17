import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { User, Role } from './user.model';

export interface AuthState {
  form: {
    email: string;
    password: string;
    role: Role;
  };
  user: User;
}

const initialState = {
    user: null,
    form: {},
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(initialState);
  }

}

