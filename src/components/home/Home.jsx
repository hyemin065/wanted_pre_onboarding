import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  width: 120px;
  height: 40px;
  margin: 0 10px;
  border: 1px solid #e6d3fa;
  background-color: #dfd4f3e1;
  color: blueviolet;
`;

const Home = () => {
  const buttonType = ['Toggle', 'Tab', 'Slider', 'Input', 'Dropdown'];
  return (
    <div>
      {buttonType.map((item, index) => {
        return (
          <Link to={item} key={index}>
            <Button type="button">{item}</Button>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
