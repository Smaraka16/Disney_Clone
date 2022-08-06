import React from 'react'
import styled from 'styled-components'
 
  

function Details() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"   />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
            </ImageTitle>
            <Control>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupButton>
            </Control>
            <SubTitle>
                20m * 7m * Family, Fantasy, Kids, Animations,
            </SubTitle>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Optio sit fugiat voluptate saepe alias nemo,
                repellendus aut nam dolores accusamus Lorem  ipsum dolor sit amet consectetur 
                adipisicing elit. Perspiciatis magni eaque ipsa amet eligendi corrupti,
                voluptatibus voluptatem molestias officiis tempora doloremque maxime. 
            </Description>
        </Container>
    )
}

export default Details

const Container = styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
     
     

`
const Background = styled.div `
top:0;
        right:0;
        left:0;
        bottom:0;
        position:fixed;
        z-index:-1;
        opacity:0.8;
         
         
    img{
        width:100%;
        height:100%
        object-fir:cover;
         
         
         
    }
     
`
const ImageTitle = styled.div `
    height:20vh;
    width:35vw;
    min-height:170px;
    min-width:200px;
    margin-top:25px;
    display:flex;
     
    img{
        height:100%;
        width:100%;
        object-fit:contain;
    }
`

const Control = styled.div`
    display:flex;
    align-items:center;
    margin-top:35px;
     
`

const PlayButton = styled.button `
    border-radius:4px;
    font-size:15px;
    align-items:center;
    height:40px;
    width:150px;
    display:flex;
    justify-content:center;
    background :rgb (249, 249, 249);
    border:none;
    padding: 0px 24px;
    margin-right:22px;
    letter-spacing:1.8px;
    font-family:roboto, sans-serif;
    cursor:pointer;
    text-transform: uppercase;
    font-weight:600;
    &:hover{
        background: rgb(198, 198, 198);
    }
`
const AddButton = styled.button `
    margin-right:16px;
    height:40px;
    width:40px;
    display:flex;
    color:white;
    align-items: center;
    justify-content:center;
    border-radius:51%;
    cursor:pointer;
    border:2px solid white;
    background:rgba(0, 0, 0, 0.6);
    border:1px solid rgb(249, 249, 249);
    span{
        font-size:30px;
        font-family:roboto, sans-serif;
    }
`
const TrailerButton= styled(PlayButton) `
    background-color:rgba(0, 0, 0, 0.3);
    color:white;
    border:1px solid rgb(249, 249, 249);
    &:hover{
        color:black;
        font-weight:600;
        font-family:roboto, sans-serif;
    }
     
`
const GroupButton = styled(AddButton) `
    background:rgba(0, 0, 0, 0.9);
`

const SubTitle = styled.div`
    color:rgb(249, 249, 249);
    font-size:16px;
    min-height:20px;
    margin-top:28px;
    font-family:roboto, sans-serif;
`

const Description = styled.div`
    color:rgb(249, 249, 249);
    font-family:roboto, sans-serif;
    line-height:1.4;
    font-size:15px;
    margin-top:18px;
    max-width:650px;
    opacity:0.7;
     
     
`
