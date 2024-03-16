import { Send } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 20px 0px;
  font-size: 24px;
  font-weight: 300;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  margin: 0 auto;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 9;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates from your favourate products.
      </Description>
      <InputContainer>
        <Input placeholder='your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
