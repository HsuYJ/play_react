import React from 'react';
import Styled from 'styled-components';
import preval from 'preval.macro';

const hoverRotateDeg = preval`module.exports = 360 + 45`;
// const Square = Styled.div`
export default Styled.div`
  width: ${preval`module.exports = 100 / 3`}%;
  height: ${preval`module.exports = 100 / 3`}%;
  background-color: ${props => {
    switch (props.status) {
      case 0: {
        return 'green';
      }
      case 1: {
        return 'red';
      }
      case 2: {
        return 'blue';
      }
      default: {
        return 'pink';
      }
    }
  }};
  border-radius: 50%;
  transition: all 0.5s;
  user-select: none;

  &:hover {
    // transition: all 0.5s;
    border-radius: 15%;
    transform: scale(0.5) rotateZ(${hoverRotateDeg}deg);
  }
`;

// export default function(props) {
//   return (
//     <Square status={props.status} onClick={props.onClick}>{ props.status }</Square>
//   );
// }