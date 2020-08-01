import React, { useContext } from "react";
import styled from "styled-components";
import Stat from "./Stat";

import Header from "./Header";
import ActionBar from "./ActionBar";
import { TweetContext } from "../TweetContext";


const Tweet = () => {
  const {
    displayName,
    username,
    avatarSrc,
    date,
    tweetContents,
    isRetweetedByCurrentUser,
    isLikedByCurrentUser,
    numOfLikes,
    numOfRetweets,
  } = useContext(TweetContext);
  return (
    <Wrapper>
      <Header
        displayName={displayName}
        username={username}
        avatarSrc={avatarSrc}
      />
      <TweetContents>{tweetContents}</TweetContents>
      <Timestamp>{date}</Timestamp>
      <Divider />
      <Stats>
        <Stat num={numOfRetweets} text={numOfRetweets === 1 ? 'Retweet' : 'Retweets'}></Stat>
        <Stat num={numOfLikes} text={numOfLikes === 1 ? 'Like' : 'Likes'}></Stat>
      </Stats>
      <Divider />
      <ActionBar
        isRetweetedByCurrentUser={isRetweetedByCurrentUser}
        isLikedByCurrentUser={isLikedByCurrentUser}
      />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

export default Tweet;
