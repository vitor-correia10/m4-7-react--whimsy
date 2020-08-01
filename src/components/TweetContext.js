import React from "react";
import avatar from "../assets/carmen-sandiego.png";
import moment from 'moment';

export const TweetContext = React.createContext();


export const TweetProvider = ({ children }) => {
    const date = moment().format('h:mm A - MMM Do, YYYY ');

    return (
        <TweetContext.Provider
            value={{
                tweetContents: "Where in the world am I?",
                displayName: "Carmen Sandiego ✨",
                username: "carmen-sandiego",
                avatarSrc: avatar,
                date: date,
                isRetweetedByCurrentUser: false,
                isLikedByCurrentUser: false,
            }}
        >
            {children}
        </TweetContext.Provider>
    );
};
