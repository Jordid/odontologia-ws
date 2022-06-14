export interface IUserDoctor {
  doctorId: number;
}
export interface IUserPerson {
  doctor: IUserDoctor;
}
export interface IUser {
  avatarUrl: string;
  email: string;
  emailVerifiedAt: string;
  name: string;
  person: IUserPerson;
  userId: number;
}
