import {
  FavoriteBorderSharp,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import styled from 'styled-components';

interface Props {
  item: Product;
}

interface Product {
  id: number;
  img: string;
}


const Info = styled.div`
  opacity: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
`; 


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f5fbfd;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 280px;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  width: auto;
  z-index: 2;
  color: white;
  opacity: 1;
`;



const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }: Props) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined color='e1e1e1' />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderSharp />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
