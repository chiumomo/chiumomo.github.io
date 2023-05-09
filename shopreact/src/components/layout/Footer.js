import React from "react";
import styled from 'styled-components';
import StyledContainer from "../common/Container";

const StyledFooter = styled.footer`
    background-color:#777ccb;
    padding:40px 0 ;
`

const Footer =()=>{
    return (
        <StyledFooter>
            <StyledContainer>
            this is footer

            </StyledContainer>
        </StyledFooter>
    )
};

export default Footer;