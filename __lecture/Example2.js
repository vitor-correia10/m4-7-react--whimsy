import React from "react";
import styled from "styled-components";

const AnimationEx1 = ({ children = "Hello" }) => {
  return (
    <Button>
      <Surface>{children}</Surface>
      <Shadow />
    </Button>
  );
};

const Button = styled.button`
  position: relative;
  width: 300px;
  height: 80px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ButtonLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 4px;
`;

const Surface = styled(ButtonLayer)`
  z-index: 2;
  background: hotpink;
  color: white;
  text-shadow: 1px 1px 2px mediumvioletred;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  transition: transform 400ms cubic-bezier(0, 0.68, 0.67, 1.09);

  &:hover {
    transform: translate(-10px, -10px);
  }
`;

const Shadow = styled(ButtonLayer)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #ccc;
`;

export default AnimationEx1;
