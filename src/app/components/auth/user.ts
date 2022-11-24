export class User {
  readonly NickName: string;
  readonly password: string;

  constructor({ NickName, password }: { NickName: string; password: string }) {
    this.NickName = NickName;
    this.password = password;
  }
}
