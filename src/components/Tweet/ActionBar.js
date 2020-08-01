import React, { useContext } from "react";
import styled from "styled-components";

import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";

import { TweetContext } from "../TweetContext";

const ActionBar = ({ isRetweetedByCurrentUser, isLikedByCurrentUser }) => {
  const { handleToggleLike, handleToggleRetweet } = useContext(TweetContext);
  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action color="rgb(23, 191, 99)" size={40} onClick={handleToggleRetweet}>
        <TweetActionIcon
          kind="retweet"
        />
      </Action>
      <Action color="rgb(224, 36, 94)" size={40} onClick={handleToggleLike} >
        <LikeButton
          kind="like"
        />
      </Action>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

export default ActionBar;
