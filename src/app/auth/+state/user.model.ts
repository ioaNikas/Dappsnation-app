// tslint:disable-next-line
export type User = {
  id: string;
  email: string;
  role: Role;
};

export interface UserForm {
  email: string;
  pwd: string;
  role: Role;
}

export enum Role {
  admin = 'admin',
  customer = 'customer',
}

export function createUser(user: Partial<User>) {
  return {
    id: user.id,
    role: user.role,
    email: user.email
  } as User;
}
