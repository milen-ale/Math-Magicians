import React from 'react';
import './index.css';
import Calculator from './compnents/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>

    );
  }
}
export default App;
