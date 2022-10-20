import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'; // gives image path

const Container = styled.div`
    background-color:#a0d468;
    height:64px;
`;

const Icon = styled.div`
    float:left;
    width:40px;
    height:40px;
    border-radius:50%;
    background:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition:0.4s ease; 
    &:hover{
        background:#e9f5f5;
        transform:scale(1.1);
    }
`;

export const Navbar = () => {
  return (
    <Container>
        <Icon>
            <object height="50px" type="image/svg+xml" data="https://www.svgrepo.com/show/276263/egg-pokemon.svg"></object>
        </Icon>
        <h1 style={{color: "aliceblue", margin: "12px", float: "left"}} >
            Pokémon
        </h1>

    </Container>
  )
}
