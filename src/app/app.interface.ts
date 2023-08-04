export interface Post {
  title: string;
  picture: string;
  decription: string;
  detail: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  token: string;
  type: 'user' | 'admin';
}