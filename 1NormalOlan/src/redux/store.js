import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    //compose..redux-dev tollsdan geldi
    applyMiddleware(logger)
    // other store enhancers if any
  )
);

export default store;

// /*
// 1.npm e install loggeri yazdix
// 2.store a import etdik
// 3.apply mideleware icine eklediik
// >simdi biz her buy cake edende bu console logda bize gosterecek
// */
