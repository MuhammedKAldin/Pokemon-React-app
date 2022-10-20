import React, { useContext } from 'react'
import { Context } from '../Store'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Wrapper = styled.div`
    font-size:1.3vw;
    font-weight:700;
    /* padding:10vw; */
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
`;

const LanguageBox = styled.h3`
    background-color:white;
    margin-left: 12px;
    margin-bottom: 7vw;
    border-style: solid;
    border-radius: 2px;
    border-width: 2px;
    padding: 3px 12px;
    transition:0.4s ease;
    &:hover{
        background:#e9f5f5;
        transform:scale(1.1);
    }
    ${mobile({
        fontSize: "3vw",
        width: "20px",
        marginLeft: "23px"
    })}
`;

const WidthBox = styled.div`
    padding:5px;
    transition:0.4s ease;
    &:hover{
        transform:scale(1.1);
    }
    ${mobile({
        width:"38px"
    })}
`;

const HeightBox = styled.div`
    padding:5px;
    transition:0.4s ease;
    &:hover{
        transform:scale(1.1);
    }
    ${mobile({
        width:"38px"
    })}
`;

const TitleBox = styled.div`
    text-align:left;
    background-color:#24b146;
    width:100%;
    border:#24b146 solid;
    border-radius: 2px;
    border-width: 2px;
    padding: 3px 12px;
`;

const MesurementsBox = styled.div`
    background-color:white;
    width:100%;
    border-style: solid;
    border-radius: 2px;
    border-width: 2px;
    padding: 3px 12px;
    ${mobile({
        fontSize: "2.3vw",
    })}
`;

const SecondInfo = styled.div`
    text-transform: capitalize;
`;

const PokemonAvatar = styled.img`
    content: url(${(props) => props.src});  
    height: 35vw;  
    margin-left:40px;
    ${mobile({
        paddingTop:"40px",
        marginLeft:"10px"
    })}
`

const ThirdInfo = styled.div`
    text-transform: capitalize;
`;

const PokemonElementsBox = styled.h3`
    background-color:white;
    width: 11vw;
    border-style: solid;
    border-width: 2px;
    padding: 3px 12px;
    margin-right: 14px;
    -webkit-transition: 0.4s ease;
    transition: 0.4s ease;
    &:hover{
        background:#e9f5f5;
        transform:scale(1.1);
    }
    ${mobile({
        fontSize: "3vw",
        width: "10vw",
        marginLeft: "20px"
    })}
`

export const MiddleStats = () => {
  //Grabbing State
  const [state, setState] = useContext(Context);

  return (
    <Wrapper>
            <FirstInfo>
                    <LanguageBox>
                        ENG
                    </LanguageBox>
                    <WidthBox>
                        <TitleBox>Height</TitleBox>
                        <MesurementsBox>
                            {state.height == "" ||  state.height == undefined ? "--" : state.height}
                        </MesurementsBox>
                    </WidthBox>
                    <HeightBox>
                        <TitleBox>Weight</TitleBox>
                        <MesurementsBox>
                            {state.weight == "" ||  state.weight == undefined ? "--" : state.weight}
                        </MesurementsBox>
                    </HeightBox>
                    <HeightBox>
                        <TitleBox>Shape</TitleBox>
                        <MesurementsBox>
                            {state.shape == "" ||  state.shape == undefined ? "--" : state.shape}
                        </MesurementsBox>
                    </HeightBox>
            </FirstInfo>

            <SecondInfo>
                <PokemonAvatar src={state.front_sprite == "" ||  state.front_sprite == undefined ? "https://31.media.tumblr.com/9697ebbc4887dc57620c50a12f24c61d/tumblr_nc1rokF7r31s1rd1xo1_500.gif" : state.front_sprite} />
            </SecondInfo>

            <ThirdInfo>
                <PokemonElementsBox>
                    {state.type1 == "" ||  state.type1 == undefined ? "--" : state.type1}
                </PokemonElementsBox>

                <PokemonElementsBox >
                    {state.type2 == "" ||  state.type2 == undefined ? "--" : state.type2}
                </PokemonElementsBox>

                <PokemonElementsBox >
                    {state.base_experience == "" ||  state.base_experience == undefined ? "--" : "Exp: "+state.base_experience}
                </PokemonElementsBox>

            </ThirdInfo>
    </Wrapper>
  )
}
