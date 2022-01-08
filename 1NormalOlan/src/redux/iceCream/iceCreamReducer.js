import { BUY_ICECREAM } from "./iceCreamTypes";
const INITIAL_STATE = {
  numOfIceCreams: 121,
};

const iceCreamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_ICECREAM: {
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    }

    default:
      return state;
  }
};
export default iceCreamReducer;
