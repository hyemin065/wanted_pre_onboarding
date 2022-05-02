import { useState } from 'react';
import styled from 'styled-components';

const ToggleArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 50px;
  background-color: #dfd4f3e1;
  font-weight: bold;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  margin: 30px 30px 100px;

  span {
    z-index: 999;
    &:first-of-type {
      color: ${(props) => (props.toggle ? 'blueviolet' : '#555')};
    }
    &:last-of-type {
      color: ${(props) => (!props.toggle ? 'blueviolet' : '#555')};
    }
  }
`;

const ToggleCircle = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 30px;
  width: 49%;
  left: ${(props) => (props.toggle ? '1%' : '50%')};
  height: 44px;
  background-color: #fff;
  transition: 0.5s;
`;

const Toggle = () => {
  const [toggleState, setToggleState] = useState(true);

  //toggle 상태변경
  const toggleHandler = () => {
    setToggleState((prev) => !prev);
  };

  return (
    <ToggleArea toggle={toggleState} onClick={toggleHandler}>
      <ToggleCircle toggle={toggleState}></ToggleCircle>
      <span>기본</span>
      <span>상세</span>
    </ToggleArea>
  );
};

export default Toggle;
