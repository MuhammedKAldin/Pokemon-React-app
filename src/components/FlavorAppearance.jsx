import React, { useContext } from 'react'
import { Context } from '../Store'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Wrapper = styled.div`
    text-align: "center";
    justify-content:space-between;
`;

const FlavorTextBox = styled.div`
    margin-left: 15%;    
    font-size:1.3vw;
    font-weight:700;
    width: 70%;
    background-color:white;
    border-style: solid;
    border-width: 2px;
    -webkit-transition: 0.4s ease;
    transition: 0.4s ease;
    &:hover{
        background:#e9f5f5;
        transform:scale(1.1);
    }
    ${mobile({
        fontSize:"3vw",
        width:"70%",
    })}
`

export const FlavorAppearance = () => {
  //Grabbing State
  const [state, setState] = useContext(Context);

  return (
    <Wrapper>
            <FlavorTextBox>
                {state.flavor_text_entries == "" ? "--" : state.flavor_text_entries}
            </FlavorTextBox>
    </Wrapper>
  )
}
