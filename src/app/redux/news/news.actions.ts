import {Action} from '@ngrx/store';

export enum NewsActionTypes {
  Add = '[News Component] Add',
  Remove = '[News Component] Remove'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class NewsAdd implements ActionEx {
  readonly type = NewsActionTypes.Add;
  constructor(public payload: any) {
  }
}
export class NewsRemove implements ActionEx {
  readonly type = NewsActionTypes.Remove;
  constructor(public payload: any) {
  }
}