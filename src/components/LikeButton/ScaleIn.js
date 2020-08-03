import React from 'react';
import { useSpring, animated } from 'react-spring';

const ScaleIn = ({ children }) => {
    const scaleIn = useSpring({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        transform: "scale(1)",
        from: {
            transform: "scale(0)",
        },
        config: {
            tension: 300,
            friction: 10,
        },
    });
    return <animated.div style={scaleIn}>{children}</animated.div>;
}

export default ScaleIn;