import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommeded for You</h4>
      <Content>
        <Wrap>
          <img src="https://th.bing.com/th/id/OIP.3H08G-kB1TwnsuJ6VcoB_AHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7" />
        </Wrap>
        <Wrap>
          <img src="https://www.journaldugeek.com/content/uploads/2018/06/ilrexe2msiwufngjl74q.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://assets3.thrillist.com/v1/image/2878536/1200x600/scale;" />
        </Wrap>
        <Wrap>
          <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/08/What-If-Captain-Carter-Character-Poster-1-scaled-e1628022479562.jpg" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  cursor: pointer;
`;

const Wrap = styled.div`
  border: 1px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
