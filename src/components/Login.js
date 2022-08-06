import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />  
                <SignUp>Get All There</SignUp>
                <Description> Get Early subscription and enjoy the trending marvel universe.  
                 Try the one month free period for no cost.Pay $1 and enjoy unlimited entertainment ,TV Shows, Web Series and a lot more.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" /> 
            </CTA>
            
        </Container>
    )
}

export default Login

const Container = styled.div`
    position:relative;
    height: calc(100vh - 70px);
    display:flex;
    align-items:top;
    justify-content:center;
    &:before{
        content:"";
        position:absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        background:url("/images/login-background.jpg");
        background-position:top;
        background-size: cover;
        background-repeat:no-repeat;
        z-index:-1;
        opacity:0.7;
    }
`
const CTA = styled.div`
    max-width:650px;
    width:90%;
    padding:80px 40px;
    display:flex;
    flex-direction:column;
    margin-top:50px;
    align-items:center;
     
`

const CTALogoOne = styled.img`
`

const SignUp=styled.a`
    background-color: #0063e5;
    width:100%;
    font-weight:bold;
    padding:17px 0;
    text-align:center;
    color:#f9f9f9;
    font-family:'roboto', sans-serif;
    border-radius:4px;
    cursor:pointer;
    transition:all 250ms;
    font-size:18px;
    letter-spacing: 1.5px;
    margin-top:8px;
    margin-bottom:12px;

    &:hover{
        background: #0483ee;
         
    }
`
const Description = styled.p`
    font-size:11px;
    font-family:'roboto', sans-serif;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
    margin-bottom:12px;

`
const CTALogoTwo =styled.img`
    width:90%;
    margin:0 auto;
`

