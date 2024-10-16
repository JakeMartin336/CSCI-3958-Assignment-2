// // Feel free to modify this JS code as you see fit!
// // Just don't import any external 3rd party JS libraries for this assignment!

const POKEMON_DATA = [
	{ "id": 1, "name": "bulbasaur" },
	{ "id": 4, "name": "charmander" },
	{ "id": 7, "name": "squirtle" },
	{ "id": 25, "name": "pikachu" },
	{ "id": 39, "name": "jigglypuff" },
	{ "id": 137, "name": "porygon" },
	{ "id": 144, "name": "articuno" },
	{ "id": 151, "name": "mew" },
	{ "id": 175, "name": "togepi" },
	{ "id": 249, "name": "lugia" },
	{ "id": 393, "name": "piplup" },
	{ "id": 399, "name": "bidoof" },
	{ "id": 483, "name": "dialga" },
	{ "id": 727, "name": "incineroar" },
	{ "id": 792, "name": "lunala" }
]

window.onload = async () => {
	const pokedex = document.getElementById('pokedex');
	const leftPanelClosed = document.getElementById('left-panel-closed');
	const openButton = document.getElementById('open-arrow');

	// Init function. Use this to do stuff when the app start to first load.
	const onInit = () => {
		pokedex.style = "display: none";
		openButton.addEventListener('click', () => {
			pokedex.style = "display: flex";
			leftPanelClosed.style = "display: none";
		});
	}

	// On startup, call onInit.
	onInit();

	// Open/Close Pokédex
	const closeCircle = document.getElementById('close-circle');
	closeCircle.addEventListener('click', () => {
		pokedex.style = "display: none";
		leftPanelClosed.style = "display";
	});

	// Pokémon Detail Display
	const DetailDisplay = (id, name) => {
		const pokemonDisplay = document.getElementById('pokemon-display').querySelector('img');
		const nameDisplay = document.getElementById('name-display');

		pokemonDisplay.src = `img/${id}.png`;
		nameDisplay.innerText = name.toUpperCase();
	}


	const randomButton = document.getElementById('random-button');
	randomButton.addEventListener('click', () => {
		const randomIndex = Math.floor(Math.random() * POKEMON_DATA.length);
		const randomPokemon = POKEMON_DATA[randomIndex];
		currentPokemon = { id: randomPokemon.id, name: randomPokemon.name };
		DetailDisplay(currentPokemon.id, currentPokemon.name);
	});

	// Navigation Buttons

}