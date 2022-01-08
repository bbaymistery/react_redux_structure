import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
//useSelector > mapstate props gibi is gorur
/* CakeContainer normal yoolla yapilirken HokksCake ise hooklar ile yapildi */

/*
TIP
We recommend using the React-Redux hooks API as the default approach in your React components.

The existing connect API still works and will continue to be supported, but the hooks API is simpler and works better with TypeScript.
*/
function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>HooksContainer - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
