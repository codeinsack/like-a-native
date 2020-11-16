export enum UserRole {
  user = 'user',
  moderator = 'moderator',
  admin = 'admin',
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}
