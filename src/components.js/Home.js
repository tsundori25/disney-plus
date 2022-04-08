import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";

function Home() {
  useEffect(() => {
    // console.log("Yoklooo");
    db.collection("id").onSnapshot((snapshot) => {
      // console.log(snapshot);
      let tempMovies = snapshot.docs.map((doc) => {
        console.log(doc.data());
        return { id: doc.id, ...doc.data() };
      });
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  }
`;
