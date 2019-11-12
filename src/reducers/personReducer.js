import { CREATE_PERSON, CREATE_PERSONS } from "../actions/actionTypes";

const initialState = {
  persons: null,
  person: null
};

const createPerson = (state, action) => {
  return {
    ...state,
    person: action.person
  };
};

const createPersons = (state, action) => {
  return {
    ...state,
    persons: action.persons
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PERSON:
      return createPerson(state, action);

    case CREATE_PERSONS:
      return createPersons(state, action);

    default:
      return state;
  }
};
export default reducer;
