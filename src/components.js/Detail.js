import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://images.fanart.tv/fanart/bao-61d60dac86f68.jpg" />
      </Background>
      <ImageTitle>
        <img src="/images/scale.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-white.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButoon>
          <span>+</span>
        </AddButoon>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2022 - 7m - family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        A Chinese mom who's sad when her grown son leaves home gets another
        chance at motherhood when one of her dumplinigs to life. But she finds
        that nothing stays cute and small forever.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-hieght: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 20vh;
  width: 20vw;

  img {
    margin-top: 10px;
    margin-left: 20px;
    width: 250px;
    height: 250px;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  cursor: pointer;
  margin-top: 100px;
  margin-left: 20px;
  align-items: center;
`;

const PlayButton = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 3px;
  font-size: 15px;
  display: flex;
  align-items: center;
  color: white;
  padding: 3px 9px;
  margin-right: 22px;
  border: 1px solid white;
  letter-spacing: 1.8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  img {
    width: 30px;
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid white;
  color: white;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const AddButoon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }

  span {
    font-size: 25px;
    margin-left: 10px;
  }
`;

const GroupWatchButton = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 18px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }

  img {
    margin-left: 1px;
  }
`;

const SubTitle = styled.div`
  margin-left: 22px;
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
  letter-spacing: 1.1px;
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  font-size: 20px;
  margin-left: 22px;
  min-height: 20px;
  margin-top: 26px;
  letter-spacing: 1.1px;
  margin-right: 50%;
`;
