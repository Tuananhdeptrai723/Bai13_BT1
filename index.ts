import express from 'express';
import axios from 'axios';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemonList = response.data.results.map((pokemon: any) => pokemon.name);
        res.send(pokemonList);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});