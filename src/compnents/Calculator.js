import React, { Component } from 'react';

import calculate from '../logic/calculate';

class Calcualtor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.btnClickHandler = this.btnClickHandler.bind(this);
  }

  btnClickHandler = (e) => {
    const btn = e.target.innerHTML;
    this.setState((state) => calculate({ ...state }, btn));
  };

  update = () => {
    const { total, operation, next } = this.state;
    return (
      <>
        {total}
        {operation}
        {next}
      </>
    );
  };

  render() {
    return (
      <div className="calulator-container">
        <div>
          <div className="input-filed">
            <span>
              {this.update()}
            </span>
          </div>
        </div>
        <div className="wrpper-operation">
          <div className="Digits-container">
            <button onClick={this.btnClickHandler} type="button" className="other-operations btn">AC</button>
            <button onClick={this.btnClickHandler} type="button" className="other-operations btn">+/-</button>
            <button onClick={this.btnClickHandler} type="button" className="other-operations btn ">%</button>
            <button onClick={this.btnClickHandler} type="button" className="other-operations btn operator">&#247;</button>
          </div>

          <div className="Digits-container">
            <button onClick={this.btnClickHandler} type="button" className="digits-btn btn">7</button>
            <button onClick={this.btnClickHandler} type="button" className="digits-btn btn">8</button>
            <button onClick={this.btnClickHandler} type="button" className="digits-btn btn">9</button>
            <button onClick={this.btnClickHandler} type="button" className="digits-btn  operator">x</button>
          </div>
          <div className="Digits-container">
            <button onClick={this.btnClickHandler} type="button" className="digits-btn btn">4</button>
            <button onClick={this.btnClickHandler} type="button" className="digits-btn btn">5</button>
            <button onClick={this.btnClickHandler} type="button" className="digits-btn btn">6</button>
            <button onClick={this.btnClickHandler} type="button" className="digits-btn  operator">-</button>
          </div>
          <div className="Digits-container">
            <button onClick={this.btnClickHandler} type="button" className="digits-btn btn">1</button>
            <button onClick={this.btnClickHandler} type="button" className="digits-btn btn">2</button>
            <button onClick={this.btnClickHandler} type="button" className="digits-btn btn">3</button>
            <button onClick={this.btnClickHandler} type="button" className="digits-btn  operator">+</button>
          </div>
          <div className="Digits-container">
            <button onClick={this.btnClickHandler} type="button" className="btn-last btn">0</button>
            <button onClick={this.btnClickHandler} type="button" className="digits-btn  btn">.</button>
            <button onClick={this.btnClickHandler} type="button" className="digits-btn operator">=</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calcualtor;
