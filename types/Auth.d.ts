interface ILogin {
  username: string;
  password: string;
}

interface IRegister {
  username: string;
  password: string;
  role?: string;
}

export type { ILogin, IRegister };
