import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
/* CakeContainer normal yoolla yapilirken HokksCake ise hooklar ile yapildi */
function CakeContainer(props) {
  console.log(props);
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

// bu sekilde calismasi icin react derslerinnen alisveris sepeti part2 den productsa bax
//orda icine parametere goyub fonksyonu calisdirma ornegi avr
// export default connect(mapStateToProps, { buyCake })(CakeContainer);