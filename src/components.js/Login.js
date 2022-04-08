import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Dragon for an additional frr wwith
          a Disney+ subscription. As of 03/25/22, the price of Disney+ and The
          Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.6;
    z-index: -1;
  }
`;

const CTA = styled.div`
  min-width: 650px;
  width: 50%;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const CTALogoOne = styled.img``;

const CTALogoTwo = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1.8px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 14px;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;
