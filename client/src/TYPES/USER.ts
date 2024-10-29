export interface user {
  id?: string;
  name?: string;
  email: string | null;
  password: string | null;
}

export interface LoginProps {
  email: string,
  password: string
}