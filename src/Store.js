// States Holder (Heart)

import React, {useState} from 'react'

const initialState = {
    id: 0,
    name: ' ',
    type1: "--",
    type2: "--",
    height: 0,
    weight: 0,
    base_experience: 0, 
    shape: "--", 
    habitat: " ", 
    egg_groups: " ", // [0] => name, [1] => name
    flavor_text_entries: "Use the Searchbox to find more information about your favourite Pokémon !", 
    front_sprite: "https://31.media.tumblr.com/9697ebbc4887dc57620c50a12f24c61d/tumblr_nc1rokF7r31s1rd1xo1_500.gif", // sprites => front_default
};

export const Context = React.createContext();

// Setter for the States
// Wrapper component which will provide our application our state,
// from anywhere, with "children" prop which is built prop in react we can grab
const Store = ({children}) => {
    // state, setState can be anything else
    const [state, setState] = useState(initialState);

    return(

        // Inside => Context.Provider will return children passed into Store
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    );
};

export default Store;