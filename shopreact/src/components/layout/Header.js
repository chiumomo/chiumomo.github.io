import React from "react";
import styled from 'styled-components';
import headerHeight from "../common/HeaderHeight";
//是否fixed與這裡的設定無關


const StyledHeader = styled.header`
    background-color:#ccafaa ;
    height: ${headerHeight};
    width: 100vw;
`;


const Header =()=>{
    return <StyledHeader>this is header</StyledHeader>
};

export default Header;