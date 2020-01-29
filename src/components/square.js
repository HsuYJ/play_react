import React from 'react';
import Styled from 'styled-components';
import preval from 'preval.macro';

const Square = Styled.div`
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
    transition: all 0.15s;
    border-radius: 15%;
    transform: scale(0.8) rotateZ(-45deg);
  }
`;

export default function(props) {
  return (
    <Square status={props.status} onClick={props.onClick}>{ props.status }</Square>
  );
}