import { Store, StoreConfig } from '@datorama/akita';
import { UserDetails } from './user-details';

export interface SessionState {
   token: string;
   userDetails: UserDetails;
}

export function createInitialState(): SessionState {
  return {
    token: '',
    userDetails: null
  };
}

@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
