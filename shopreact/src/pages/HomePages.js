import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
// import styled from 'styled-components'
import StyledClearFix from "../components/common/ClearFix";



const HomePage =() =>{
    return(
        <DefaultLayout fixedHeader>
            <StyledClearFix />
            HomePage
            <p>
                HomePage
                Consectetur veniam excepteur do culpa duis la
                borum ad commodo consectetur ullamco minim
                . Id nisi occaecat aliqua qui elit tempor nulla 
                pariatur. Consequat dolor consequat in duis. 
                Proident aute culpa dolor reprehenderit duis ea 
                anim elit dolor sit pariatur. Proident ad
                ipisicing excepteur velit dolore commodo aute.
            </p>
            
        </DefaultLayout>
    )

}

export default HomePage;