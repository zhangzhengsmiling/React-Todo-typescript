
export type ID<T> = T;

export interface IUser {
  id?: ID<number>;
  name: string;
  age: number;
  hobby: string;
}
