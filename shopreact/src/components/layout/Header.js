import React from "react";
import styled from 'styled-components';
import StyledContainer from "../common/Container";
import headerHeight from "../common/HeaderHeight";
//是否fixed與這裡的設定無關


const StyledHeader = styled.header`
    background-color:#ccafaa ;
    height: ${headerHeight};
    width: 100vw;
`;


const Header =()=>{
    return(
        <StyledHeader>
            <StyledContainer>
            this is header
            </StyledContainer>
        </StyledHeader>

    ) 
};

export default Header;