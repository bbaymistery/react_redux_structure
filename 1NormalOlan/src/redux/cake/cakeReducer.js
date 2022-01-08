import { BUY_CAKE } from "./cakeTypes";
const INITIAL_STATE = {
  numOfCakes: 10,
};

const cakeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    }

    default:
      return state;
  }
};
export default cakeReducer;
