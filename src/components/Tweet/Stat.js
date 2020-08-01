import React from "react";
import styled from "styled-components";

const Stat = ({ num, text }) => {
    return (
        <Wrapper>
            <Number> {num} </Number> {text}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    margin-right: 10px;
`

const Number = styled.span`
    font-size: 15px;
    font-weight: bold;
`;

export default Stat;