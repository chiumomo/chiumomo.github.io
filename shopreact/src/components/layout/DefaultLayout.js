import React from "react";
import styled, {css} from 'styled-components';

import Header from "./Header";

const StyledPageHeader = styled.div`
    ${(props)=> props.fixed &&
        css`
            position:fixed
    `}
`;


const DefaultLayout = ({fixedHeader,children})=>{
    return(
        <div>
            <StyledPageHeader fixed={fixedHeader}>
                <Header/>
            </StyledPageHeader>
            
            {children}
            <footer>this is footer</footer>
        </div>
    )
}

export default DefaultLayout;