import { useState } from 'react';
import styled from 'styled-components';

const SliderArea = styled.div`
  width: 400px;
  margin-bottom: 100px;
`;

const RangeDiv = styled.div`
  border: 1px solid #ddd;
  background-color: #eee;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  p {
    font-size: 16px;
    font-weight: bold;
  }
`;

const RangeBar = styled.div`
  position: relative;
  width: 100%;
  div {
    position: relative;
    width: 97%;
    height: 5px;
  }
  span {
    width: 16px;
    height: 16px;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

const RangeInput = styled.input.attrs({
  type: 'range',
})`
  -webkit-appearance: none;
  margin-right: 15px;
  width: 100%;
  height: 5px;
  z-index: 999;
  position: absolute;
  top: 0;
  background: rgba(223, 212, 243, 1);
  background-size: ${(props) => props.value}% 100%;
  background-image: linear-gradient(blueviolet, blueviolet);
  background-repeat: no-repeat;
  margin: 0;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 22px;
    width: 22px;
    border: 3px solid #fff;
    border-radius: 50%;
    background: blueviolet;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const Button = styled.button`
  border-radius: 30px;
  width: 40px;
  height: 20px;
  font-size: 10px;
  color: #858585;
  border: none;
  position: relative;
`;

const Slider = () => {
  const percentRange = [1, 25, 50, 75, 100];
  const [rangeValue, setRangeValue] = useState(20);

  const changeValueHandler = (e) => {
    const value = e.target.value;
    setRangeValue(value);
  };

  const clickValueHandler = (value) => {
    setRangeValue(value);
  };

  return (
    <SliderArea>
      <RangeDiv>
        <p>{rangeValue}</p>
        <span>%</span>
      </RangeDiv>
      <RangeBar>
        <div>
          {percentRange.map((item, index) => {
            return (
              <span
                key={index}
                style={{
                  left: `calc(${item}% - 1%)`,
                  backgroundColor: `${rangeValue < item ? 'rgba(223, 212, 243, 1)' : 'blueviolet'}`,
                }}></span>
            );
          })}
        </div>
        <RangeInput
          type="range"
          min="1"
          max="100"
          step="1"
          value={rangeValue}
          onChange={changeValueHandler}
        />
      </RangeBar>
      <ButtonDiv>
        {percentRange.map((item) => {
          return (
            <Button
              type="button"
              key={item}
              onClick={() => clickValueHandler(item)}>{`${item}%`}</Button>
          );
        })}
      </ButtonDiv>
    </SliderArea>
  );
};

export default Slider;
