import React from 'react';
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>
        
        <div className="quantity">
          <button className="quantity__minus" title="Decrement"><span>-</span></button>
          <input type="text" name="quantity" className="quantity__input" value="60" />
          <button className="quantity__plus" title="Increment"><span>+</span></button>
        </div>
      </div>
    </>
  );
};

export default App;
