import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const DropdownArea = styled.div`
  width: 300px;
  height: 300px;
`;

const DropdownButton = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 5px;
  position: relative;
  padding: 0 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3px;
  cursor: pointer;
  .arrow {
    position: absolute;
    right: 16px;
  }
`;

const DropdownContents = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const InputDiv = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 1px solid #ddd;
  input[type='text'] {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    border: none;
    padding: 10px 20px 10px 40px;
  }
  .search {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 20px;
    color: #ddd;
  }
`;

const ContentsUl = styled.ul`
  height: 210px;
  overflow: auto;
  li {
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

const Dropdown = () => {
  const dropdownItems = [
    'BTCUSD.PERP',
    'ETHUSD.PERP',
    'BCHUSD.PERP',
    'LTCUSD.PERP',
    'XRPUSD.PERP',
    '1000SHIBUSD.PERP',
  ];

  const [dropdownInitialItem, setDropdownInitialItem] = useState('All Symbols');
  const [dropdownItemList, setDropdownItemList] = useState(dropdownItems);
  const [dropdownState, setDropdownState] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const closeRef = useRef();

  //dropdown 클릭시
  const clickDropdownHandler = () => {
    setDropdownState(!dropdownState);
    setDropdownItemList(['All Symbols', ...dropdownItems]);
    setSearchValue('');
  };

  const changeItemHandler = (e) => {
    const value = e.target.innerText;
    setDropdownInitialItem(value);
    setDropdownState(false);
    setSearchValue('');
  };

  //search
  const searchItemHandler = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    const searchItemList = dropdownItems.filter((item) => {
      return item.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });

    setDropdownItemList(['All Symbols', ...searchItemList]);
  };

  function closeHandler(e) {
    if (closeRef.current && !closeRef.current.contains(e.target)) {
      setDropdownState(false);
      setDropdownItemList(dropdownItems);
    }
  }

  //dropdown 외부영역 클릭 시
  useEffect(() => {
    document.addEventListener('mousedown', closeHandler);
    return () => {
      document.removeEventListener('mousedown', closeHandler);
    };
  }, [closeRef]);

  return (
    <DropdownArea ref={closeRef}>
      <DropdownButton onClick={clickDropdownHandler}>
        {dropdownInitialItem}
        <FontAwesomeIcon icon={faCaretDown} className="arrow" />
      </DropdownButton>
      {dropdownState && (
        <DropdownContents>
          <InputDiv>
            <input
              type="text"
              placeholder="Search Symbol"
              value={searchValue}
              onChange={searchItemHandler}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search" />
          </InputDiv>
          <ContentsUl>
            {dropdownItemList.map((item, index) => {
              return (
                <li key={index} onClick={changeItemHandler}>
                  {item}
                </li>
              );
            })}
          </ContentsUl>
        </DropdownContents>
      )}
    </DropdownArea>
  );
};

export default Dropdown;
