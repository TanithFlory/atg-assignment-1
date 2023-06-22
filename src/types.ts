export interface LoginStatus {
  isLoggedIn: boolean;
  picture?: string;
  name: string;
}

export interface UserInfo {
  email: string;
  exp: number;
  picture: string;
  name: string;
}
