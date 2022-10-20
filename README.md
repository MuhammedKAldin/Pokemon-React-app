# Pokémon Webiste, created from scratch </br>
- using Javascript, React, React Components, React Hooks, React Context handling global state that can be accessed by all components from one place ``Context``.

# APIs Used from the PokeApi services
- "https://pokeapi.co/api/v2/pokemon"
- "https://pokeapi.co/api/v2/pokemon-form/"
- 'https://pokeapi.co/api/v2/pokemon-species/

# Getting The App Started
`npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Todo:
set the state to pick the latest value, the current state returns old value of what's supposed to be there

# Launch Github page
- npm install gh-pages --save-dev
- In the package.json file, scroll down to the scripts property and add the following commands: </br>
``
"predeploy" : "npm run build",
"deploy" : "gh-pages -d build",
`` </br>
- npm run deploy
- npm install gh-pages --save (optional if the previous easnt enough)
- "deploy": "gh-pages -b main -d build" (optional if the previous doesnt work, then this switches to main branch totally)
