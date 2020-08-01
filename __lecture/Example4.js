import React from "react";
import styled, { keyframes } from "styled-components";

const AnimationEx4 = () => {
  return (
    <Wrapper>
      <span role="img" aria-label="ufo">
        🛸
      </span>
    </Wrapper>
  );
};

const pow = keyframes`
  from {
    transform: translateX(-200px);
  }
  to {
    transform: translateX(0px);
  }
`;

const Wrapper = styled.div`
  font-size: 72px;
  animation: ${pow} 400ms cubic-bezier(0.68, 0.37, 0.64, 1.29);
`;

export default AnimationEx4;
