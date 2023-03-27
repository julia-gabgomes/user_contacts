interface Login {
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: string;
    full_name: string;
    email: string;
    phone_number: string;
    created_at: Date;
    // contacts: IUserTechs[] | null;
  };
  token: string;
}

export type { Login, LoginResponse };
