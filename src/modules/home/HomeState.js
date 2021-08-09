// @flow
type HomeStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: HomeStateType = {};

export const ACTION = 'HomeState/ACTION';

export function actionCreator(): ActionType {
  return {
    type: ACTION,
  };
}

export default function HomeStateReducer(state: HomeStateType = initialState, action: ActionType): HomeStateType {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
