export type User = {
  username: string;
  avatar: string;
};

export class UserStore {
  private _username: string;
  private _avatar: string;

  constructor() {
    this._username = localStorage.getItem('username') || '';
    this._avatar = localStorage.getItem('avatar') || '';
  }

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
    localStorage.setItem('username', username);
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(avatar: string) {
    this._avatar = avatar;
    localStorage.setItem('avatar', avatar);
  }
}
