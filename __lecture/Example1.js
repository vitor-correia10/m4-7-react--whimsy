import React from "react";
import styled from "styled-components";

const AnimationEx1 = () => {
  const [on, setOn] = React.useState(false);

  return (
    <>
      <BulbWrapper>
        <Gloss />
        <On style={{ opacity: on ? 1 : 0 }} />
        <Off />
      </BulbWrapper>
      <button onClick={() => setOn(!on)}>Turn {on ? "off" : "on"}</button>
    </>
  );
};

const BulbWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const Bulb = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const On = styled(Bulb)`
  z-index: 2;
  background: linear-gradient(180deg, #ffea00, #ffb200);
  box-shadow: 0px 5px 25px hsla(42deg, 100%, 50%, 0.8);
  transition: opacity 450ms;
`;

const Off = styled(Bulb)`
  z-index: 1;
  background: #ccc;
`;

const Gloss = styled.div`
  position: absolute;
  z-index: 3; // diff
  top: 10%;
  left: 0;
  right: 0;
  width: 65%;
  height: 40%;
  margin: auto;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0.5),
    hsla(0, 0%, 100%, 0) 75%
  );
`;

export default AnimationEx1;
