// @flow
type SignupStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: SignupStateType = {};

export const ACTION = 'SignupState/ACTION';

export function actionCreator(): ActionType {
  return {
    type: ACTION,
  };
}

export default function SignupStateReducer(state: SignupStateType = initialState, action: ActionType): SignupStateType {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
