import React from "react";
import styled from "styled-components";

import Heart from "./Heart";
import { TweetContext } from '../TweetContext';
import PoppingCircle from "./PoppingCircle";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {
  const { isLikedByCurrentUser } = React.useContext(TweetContext);
  const heartSize = size * 0.6;

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLikedByCurrentUser && <PoppingCircle size={size} color='#E790F7' />}
      <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
