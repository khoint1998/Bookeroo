import { GET_PERSONS, GET_PERSON} from "../actions/types";

const initialState = {
  persons: [],
  person: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PERSONS:
      return {
        ...state,
        persons: action.payload
      };

    case GET_PERSON:
      return {
        ...state,
        person: action.payload
      };

    default:
      return state;
  }
}