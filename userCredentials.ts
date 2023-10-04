interface userCredentials {
  userId: number | string;
  name: string;
  dateOfBirth: string;
  email: string;
  status: 'active' | 'inactive';
}

export const userCredentials: userCredentials = {
  userId: 1,
  name: 'John Doe',
  dateOfBirth: '1988-02-14',
  email: 'john.doe@example.com',
  status: 'active',
};
