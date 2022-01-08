import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
const App = (props) => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Dersleri</h1>
        <ItemContainer cake />
        {/* hecne yazmasak irems 20   */}
        {/* <ItemContainer/> */}
        <hr />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <hr />
        <UserContainer />
      </div>
    </Provider>
  );
};
export default App;
