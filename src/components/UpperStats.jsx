import React, { useContext } from 'react'
import { Context } from '../Store'
import styled from 'styled-components'
import { mobile } from '../responsive';
import '../App.css' ;

const Wrapper = styled.div`
    font-size:1.3vw;
    font-weight:700;
    padding:10px 100px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({
        fontSize: "3.3vw",
        padding: "10px 20px"
    })}
`;

const FirstInfo = styled.div`
    text-transform: capitalize;
`

const SecondInfo = styled.div`
    text-transform: capitalize;
`

const ThirdInfo = styled.div`
    text-transform: capitalize;
`

const ForthInfo = styled.div`
    text-transform: capitalize;
`

export const UpperStats = () => {
  //Grabbing State
  const [state, setState] = useContext(Context);

  return (
    <Wrapper>
            <FirstInfo>
                {state.id == "" ||  state.id == undefined ? " " : "No. "+state.id}
            </FirstInfo>

            <SecondInfo>
                {state.name == "" ||  state.name == undefined  ? " " : state.name}
            </SecondInfo>

            <ThirdInfo>
                {state.habitat == "" ||  state.habitat == undefined  ? " " : state.habitat}
            </ThirdInfo>

            <ForthInfo>
                {state.egg_groups == "" ||  state.egg_groups == undefined  ? " " : state.egg_groups}
            </ForthInfo>
    </Wrapper>
  )
}
