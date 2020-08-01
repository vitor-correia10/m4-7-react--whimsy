import React from "react";
import styled, { keyframes } from "styled-components";

const AnimationEx3 = ({ children = "hello" }) => {
  return <Wrapper>{children}</Wrapper>;
};

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Wrapper = styled.div`
  padding: 40px;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  animation: ${riseIn} 400ms;
`;

export default AnimationEx3;
