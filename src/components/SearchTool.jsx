import React, { useContext } from 'react'
import { Context } from '../Store'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { PokemonApi } from '../data';

const Wrapper = styled.div`
    font-size:1.3vw;
    font-weight:700;
    justify-content: center;
    display:flex;
    ${mobile({
        fontSize: "3.3vw",
        padding: "10px 20px"
    })}
`;

const FirstInfo = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const SearchButton = styled.button`
    background-color:#24b146;
    border:#24b146 solid;
    border-radius: 2px;
    border-width: 2px;
    padding: 3px 12px;
    cursor:pointer;
    color:black;
    font-weight:900;
`;

const SearchInput = styled.input`
    background-color:white;
    border-style: solid;
    border-radius: 2px;
    border-width: 2px;
    padding: 3px 12px;
`;

export const SearchTool = () => {
    //Grabbing State
    const [state, setState] = useContext(Context);
    const [pokemon, setPokemon] = useContext(Context);
    const [search, setSearch] = useContext(Context);

    // Sync changes of the SearchBox
    const searchValueChange = event => {

        const data = {
            search: event.target.value.toLowerCase(),
        }

        setSearch(data)
    };

    // #1 First fetch
    async function ApiCall_allPokemons() {
        const res = await fetch(PokemonApi.generalSearch);
        const data = await res.json();
        return data.results;
    }

    // #2 Second fetch
    async function ApiCall_pokemon() {

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon}/`);
        const data = await res.json();
        return data;
    }

    // #3 Third fetch
    async function ApiCall_pokemonSpeciey() {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.pokemon}/`);
        const data = await res.json();
        // Last info we need
        return data;
    }

    // Returns random number from a range
    function randomNumber(min, max) { 
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } 
    
    const handleClick = async() => {
        // Searching for the pokemon Info, if existed 
        const overallPokemons = await ApiCall_allPokemons();

        const filteredData = overallPokemons.filter((pokemon) => {
            if (pokemon.name.includes(search.search)) {
                // Storing Found match Pokemon into state
                setPokemon({pokemon : pokemon.name})
            }
        })

        // Using the State to find value of our current Matched pokemon
        if(pokemon.pokemon != undefined || pokemon.pokemon != null)
        {
            // Getting the required data from result
            const typeOfPokemon = await ApiCall_pokemon();
            const SpecieyOfPokemon = await ApiCall_pokemonSpeciey();
            console.log(`fetching info for => ${typeOfPokemon.name}`);
            
            
            // Handling the pokemon type
             let pokemon_type2 = "--";
             if(typeOfPokemon.types.length > 1) {
                pokemon_type2 = typeOfPokemon.types[1].type.name;
             }

             // Handling the Flavor text variation
             let flavor_entry = randomNumber(1, 10);

            // Handling the Egg group
            let egg2ndGroup = " ";
            if(SpecieyOfPokemon.egg_groups.length > 1) {
                egg2ndGroup = "/"+SpecieyOfPokemon.egg_groups[1].name;
            }
             
             const pokemon_data = {
                 id: typeOfPokemon.id,
                 name: typeOfPokemon.name,
                 type1: typeOfPokemon.types[0].type.name,
                 type2: pokemon_type2,
                 height: typeOfPokemon.height,
                 weight: typeOfPokemon.weight,
                 base_experience: typeOfPokemon.base_experience,
                 shape: SpecieyOfPokemon.shape.name,
                 habitat: SpecieyOfPokemon.habitat.name,
                 egg_groups: SpecieyOfPokemon.egg_groups[0].name+egg2ndGroup,
                 flavor_text_entries: SpecieyOfPokemon.flavor_text_entries[flavor_entry].flavor_text,
                 front_sprite: typeOfPokemon.sprites.front_default,
             };
            
            // Saving data to Global State of React app
            setState(pokemon_data)

        }
    } 

    return (
    <Wrapper>
            <FirstInfo>
                    <SearchInput  onChange={searchValueChange} placeholder='Pokemon name...' />
                    <SearchButton onClick={()=>handleClick()} >Show pokemon</SearchButton>
            </FirstInfo>
    </Wrapper>
  )
}
