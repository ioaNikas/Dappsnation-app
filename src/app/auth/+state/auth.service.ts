
import { AuthStore } from './auth.store';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Role, createUser, User } from './user.model';
import { resetStores } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { filter, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private authStore: AuthStore,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,) {
  }

  public async signup(email: string, password: string) {
    try {
      const data = await this.afAuth.auth.createUserWithEmailAndPassword(
        email,
        password,
      );

      if (!data || !data.user) {
        throw new Error('No user found');
      }
      const user = createUser({
        role: Role.customer,
        id: data.user.uid,
        email: data.user.email
      });
      this.db.collection<User>('users').doc(user.id).set(user);
    } catch (err) {
      throw new Error('Something went wrong : ' + err);
    }
  }

  public async signin(email: string, password: string) {
    try {
      const data = await this.afAuth.auth.signInWithEmailAndPassword(
        email,
        password,
      );

      if (!data || !data.user) {
        throw new Error('No user found');
      }
    } catch (err) {
      throw new Error('Something went wrong : ' + err);
    }
  }

  public subscribeOnUser() {
    return this.afAuth.authState
      .pipe(
        filter(user => !!user),
        switchMap(({ uid }) =>
          this.db
            .collection<User>('users')
            .doc(uid)
            .valueChanges()
        ),
        tap((user: User) => this.authStore.update({user}))
      );
  }

  get authenticated(): boolean {
    return this.afAuth.authState !== null;
  }

  public logout() {
    this.afAuth.auth
      .signOut()
      .catch(error => console.log(error))
      .then(() => this.authStore.update({ user: null }));
  }

}
