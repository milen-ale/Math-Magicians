import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calcualtor() {
  const [state, setState] = useState({ total: 0 });
  const btnClickHandler = (e) => {
    const math = calculate(state, e.target.innerHTML);
    setState(math);
  };

  return (
    <div className="calulator-container">
      <div>
        <div className="input-filed">
          {state.total}
          { state.operation}
          { state.next}
        </div>
      </div>
      <div className="wrpper-operation">
        <div className="Digits-container">
          <button onClick={btnClickHandler} type="button" className="other-operations btn">AC</button>
          <button onClick={btnClickHandler} type="button" className="other-operations btn">+/-</button>
          <button onClick={btnClickHandler} type="button" className="other-operations btn ">%</button>
          <button onClick={btnClickHandler} type="button" className="other-operations btn operator">&#247;</button>
        </div>

        <div className="Digits-container">
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">7</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">8</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">9</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn  operator">x</button>
        </div>
        <div className="Digits-container">
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">4</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">5</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">6</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn  operator">-</button>
        </div>
        <div className="Digits-container">
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">1</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">2</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">3</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn  operator">+</button>
        </div>
        <div className="Digits-container">
          <button onClick={btnClickHandler} type="button" className="btn-last btn">0</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn  btn">.</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn operator">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calcualtor;
