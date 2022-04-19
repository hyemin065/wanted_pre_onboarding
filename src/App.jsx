import './App.css';
import GlobalStyles from './style/GlobalStyles';
import { Reset } from 'styled-reset';
import CenterContainer from './components/centerContainer/CenterContainer';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <CenterContainer />
    </>
  );
}

export default App;
