import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
  return (
    <>
      <h2>Item - {props.item}</h2>
      <div>
        <button onClick={props.buyItem}>Buy Items</button>
      </div>
    </>
  );
}

//second parametr is props of container itself
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //.calke burda app jsden gelir
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};
//connect(null,mapDispatchTiProps) yazsaydik sadece dispacth etceydik
export default connect(null, mapDispatchToProps)(ItemContainer);
