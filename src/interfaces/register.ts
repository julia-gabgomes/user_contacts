interface IRegisterUserData {
  full_name: string;
  email: string;
  phone_number: string;
  password: string;
}

interface IOnSubmit {
  full_name: string;
  email: string;
  phone_number: string;
  password: string;
  confirmPassword: string;
}

type IUserRegisterData = Omit<IOnSubmit, "confirmPassword">;

export type { IRegisterUserData, IOnSubmit, IUserRegisterData };
