import React, { useState } from 'react';
import Styled from 'styled-components';
import Square from 'components/square';

const Board = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 360px;
  height: 360px;
  border: 1px solid red;
`;

export default function(props) {
  const [squares, setSquares] = useState([
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ]);
  const handleClick = index => {
    console.log(index);
    let newState = squares.slice();
    let targetSquare = newState[index];
    let oldStatus = targetSquare;
    let newStatus = oldStatus + 1;

    if (newStatus > 2) {
      newStatus = 0;
    }

    newState[index] = newStatus;

    setSquares(newState);
  };

  return (
    <Board>
      {/* <div onClick={() => handleClick(2)}>TEST</div> */}
      {
        squares.map((status, index) => (
          <Square key={`square_${index}`} index={index} status={status} onClick={() => handleClick(index)} />
        ))
      }
    </Board>
  );
}