import { CREATE_PERSON, CREATE_PERSONS } from "./actionTypes";

export const createPerson = person => {
  return {
    type: CREATE_PERSON,
    person: person
  };
};

export const createPersons = persons => {
  return {
    type: CREATE_PERSONS,
    persons: persons
  };
};
