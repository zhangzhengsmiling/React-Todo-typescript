import {
  observable, makeObservable, action,
  runInAction, computed, configure
} from 'mobx';
import { IUser, ID } from './types';
configure({enforceActions: 'always'});

const db: IUser[] = [
  {
    id: 1,
    name: 'zhang',
    age: 18,
    hobby: 'coding',
  },
  {
    id: 2,
    name: 'wanghuahua',
    age: 20,
    hobby: 'game',
  }
]

export default class StateUser implements IUser {
  @observable
  public name: string = 'aaa';
  @observable
  public age: number = 18;
  @observable
  public hobby: string = 'coding';
  constructor() {
    makeObservable(this);
  }

  @action
  addAge() {
    this.age++;
  }

  @action
  async getUserInfo(id: ID<number>) {
    const u = db.find(i => i.id === id) as IUser;
    const p = new Promise<IUser>((resolve, reject) => {
      setTimeout(() => {
        return resolve(u);
      }, 1000);
    });
    const d = await p;
    runInAction(() => {
      this.name = d.name;
      this.age = d.age;
      this.hobby = d.hobby;
    });
  }

  @computed
  get doubAge() {
    return this.age * 2;
  }
}
