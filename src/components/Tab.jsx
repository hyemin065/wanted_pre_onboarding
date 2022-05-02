import styled from 'styled-components';
import { useState } from 'react';

const TabArea = styled.ul`
  width: 500px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #ddd;
  position: relative;
  font-weight: bold;
  &:after {
    content: '';
    border-bottom: 2px solid blueviolet;
    position: absolute;
    left: ${(props) =>
      props.tab === '감자'
        ? 0
        : props.tab === '고구마'
        ? 'calc(100% / 3)'
        : 'calc((100% / 3) * 2)'};
    bottom: -2px;
    width: calc(100% / 3);
    transition: 0.3s;
  }
  li {
    padding: 15px 20px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    position: relative;
    &.on {
      color: blueviolet;
    }
  }
`;

const Tab = () => {
  const tabData = ['감자', '고구마', '카레라이스'];
  const [tabInitialData, setTabInitialData] = useState('감자');

  //tab 클릭시
  const clickHandler = (selectTab) => {
    setTabInitialData(selectTab);
  };

  return (
    <TabArea tab={tabInitialData}>
      {tabData.map((data, index) => {
        return (
          <li
            key={`tab-${index}`}
            onClick={() => clickHandler(data)}
            className={tabInitialData === data ? 'on' : ''}>
            {data}
          </li>
        );
      })}
    </TabArea>
  );
};

export default Tab;
