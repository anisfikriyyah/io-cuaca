import { ActionEx, NewsActionTypes } from './news.actions';

export const initialState = [];

export function NewsReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case NewsActionTypes.Add:
      return [...state, action.payload];
    case NewsActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}