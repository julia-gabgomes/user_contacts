interface Login {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    full_name: string;
    phone_number: string;
    email: string;
    isActive: boolean;
    createdAt: Date;
  };
}

export type { Login, LoginResponse };
