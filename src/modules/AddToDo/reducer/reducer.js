import { ADD_TODO } from "../actions/actions";

const initialState = {
  messageVisibility: false,
  todo: "Finish this app"
};

export default function(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        messageVisibility: !state.messageVisibility
      };
    default:
      return state;
  }
}
