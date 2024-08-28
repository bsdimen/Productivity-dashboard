export interface User {
    id: string;
    name: string;
    email: string;
    password?: string; // Optional, depending on whether you need to handle it on the client side
  }