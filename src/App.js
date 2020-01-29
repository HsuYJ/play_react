import React from 'react';
import Board from 'components/board';
import logo from 'logo.svg';
import 'App.scss';
console.log(process.env.NODE_PATH);
console.log(process.env.NODE_ENV);
console.log(process.env.REACT_APP_gg);
function App() {
  return (
    <div className="App">
      <section className="mainSection">
        <Board />
      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
