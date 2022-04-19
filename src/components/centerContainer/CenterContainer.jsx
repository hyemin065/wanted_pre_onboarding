import styled from 'styled-components';
import Routers from '../Routers';
import Home from '../home/Home';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterContainer = () => {
  return (
    <Container>
      <Routers>
        <Home />
      </Routers>
    </Container>
  );
};

export default CenterContainer;
