import React from 'react';
import Board from 'components/board';
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
    </div>
  );
}

export default App;
