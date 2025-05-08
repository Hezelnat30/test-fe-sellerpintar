interface ErrorResponse {
  error: string;
}

interface LoginSuccess {
  token: string;
  role: string;
}

interface RegisterSuccess {
  id: string;
  username: string;
  role: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

type LoginResponse = LoginSuccess | ErrorResponse;
type RegisterResponse = RegisterSuccess | ErrorResponse;
type ProfileResponse = Omit<RegisterSuccess, "password"> | ErrorResponse;

export type { LoginResponse, RegisterResponse, ErrorResponse, ProfileResponse };
