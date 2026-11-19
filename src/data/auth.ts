export interface User {
  username: string;
  password: string;
  role: 'admin';
}

export const users: User[] = [
  {
    username: 'admin',
    password: 'admin123', // In production, this should be properly hashed
    role: 'admin'
  }
];

export const isValidCredentials = (username: string, password: string): boolean => {
  return users.some(user => 
    user.username === username && user.password === password
  );
};