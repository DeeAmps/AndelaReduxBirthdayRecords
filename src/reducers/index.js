import { SORT_BY_AGE, SORT_BY_NAME } from "../actions/actionTypes";

const stateData = {
  people: [
    {
      name: "John Sina",
      birth: "11/30/2011"
    },
    {
      name: "Barcy Washington",
      birth: "09/16/1992"
    },
    {
      name: "Peter Parker",
      birth: "01/16/1992"
    },
    {
      name: "Jimmy Shergil",
      birth: "12/12/2001"
    },
    {
      name: "Alexander Alfred",
      birth: "02/09/1891"
    },
    {
      name: "Krishna Gupta",
      birth: "12/01/1982"
    },
    {
      name: "Sania Mirza",
      birth: "11/30/2011"
    },
    {
      name: "Lata Pathak",
      birth: "10/31/1999"
    }
  ]
};

export default (state = [], action) => {
  switch (action.type) {
    case SORT_BY_AGE:
      return [...stateData.people].sort((person1, person2) =>
        new Date(person1.birth) > new Date(person2.birth) ? 1 : -1
      );
    case SORT_BY_NAME:
      return [...stateData.people].sort((person1, person2) =>
        person1.name > person2.name ? 1 : -1
      );
    default:
      return state;
  }
};
