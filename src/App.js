import './App.css';
import GlobalStyles from './style/GlobalStyles';
import { Reset } from 'styled-reset';
import styled from 'styled-components';
import Input from './components/Input';
import Slider from './components/Slider';
import Tab from './components/Tab';
import Toggle from './components/Toggle';
import Dropdown from './components/Dropdown';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <Container>
        <Toggle />
        <Tab />
        <Slider />
        <Input />
        <Dropdown />
      </Container>
    </>
  );
}

export default App;
