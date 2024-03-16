import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';

interface ArrowProps {
  direction: string;
}

interface SliderProps {
  bgColor: string;
}

interface WrapperProps {
    slideIndex: number;
  }

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  display: flex;
  transition: all 1.5s ease; 
  transform: translateX( ${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div<SliderProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #${(props) => props.bgColor};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 90%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 500;
  text-align: left;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Image = styled.img`
  height: 100%;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const onArrorClick = (dir: string) => {
    if(dir == 'left')
    {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1: 2)
    }else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0)
    }
  };

  return (
    <Container>
      <Arrow direction='left' onClick={() => onArrorClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bgColor={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>
                {item.desc}
              </Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction='right' onClick={() => onArrorClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
