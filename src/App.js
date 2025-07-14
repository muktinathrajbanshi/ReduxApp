import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber, multNumber, divNumber} from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const myOtherState = useSelector((state) => state.multTheNumber);

  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>
        
        <div className="quantity">
          <button type="button" className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber(5))}><span>-</span></button>
          <input type="text" name="quantity" className="quantity__input" value={myState} readOnly/>
          <button type="button" className="quantity__plus" title="Increment" onClick={ () => dispatch(incNumber(5))}><span>+</span></button>
        </div>
      </div>

      <div className="container my-5">
        <h1>Multiplication/Division counter</h1>
        <h4>using React and Redux</h4>
        
        <div className="quantity">
          <button type="button" className="quantity__minus" title="Decrement" onClick={() => dispatch(divNumber(5))}><span>/</span></button>
          <input type="text" name="quantity" className="quantity__input" value={myOtherState} readOnly/>
          <button type="button" className="quantity__plus" title="Increment" onClick={ () => dispatch(multNumber(5))}><span>*</span></button>
        </div>
      </div>
    </>
  );
};

export default App;
