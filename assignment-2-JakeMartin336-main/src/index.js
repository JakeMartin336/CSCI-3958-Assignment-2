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

	// // Pokémon Detail Display
	// const DetailDisplay = (id, name) => {
	// 	const pokemonDisplay = document.getElementById('pokemon-display').querySelector('img');
	// 	const nameDisplay = document.getElementById('name-display');
	// 	pokemonDisplay.src = `img/${id}.png`;
	// 	nameDisplay.innerText = name.toUpperCase();
	// }

	// // Random Display Button
	// const randomButton = document.getElementById('random-button');
	// randomButton.addEventListener('click', () => {
	// 	const randomIndex = Math.floor(Math.random() * POKEMON_DATA.length);
	// 	const randomPokemon = POKEMON_DATA[randomIndex];
	// 	currentPokemon = { id: randomPokemon.id, name: randomPokemon.name };
	// 	DetailDisplay(currentPokemon.id, currentPokemon.name);
	// });

	const pokemonListItems = document.querySelectorAll('#pokemon-list .pokemon-list-item');

	// Pokémon Detail Display
	const DetailDisplay = (div) => {
		const pokemonDisplay = document.getElementById('pokemon-display').querySelector('img');
		const nameDisplay = document.getElementById('name-display');
		
		pokemonListItems.forEach(item => {
			item.classList.remove('selected-list-item');
		});

		let randomDivImg = div.querySelector('img');
		div.classList.add('selected-list-item');

		pokemonDisplay.src = randomDivImg.src;
		nameDisplay.innerText = randomDivImg.alt.toUpperCase();
	}
	
	// Random Display Button
	const randomButton = document.getElementById('random-button');
	randomButton.addEventListener('click', () => {
		let randomIndex = Math.floor(Math.random() * pokemonListItems.length);
		let randomDiv = pokemonListItems[randomIndex];

		currentPokemonIndex[0] = Math.floor(randomIndex/3)
		currentPokemonIndex[1] = randomIndex%3

		DetailDisplay(randomDiv);
	});

	// Update List of Pokemon To Display
	pokemonListItems.forEach(function(item, index) {
		let imgElement = item.querySelector('img');
		imgElement.src = `img/${POKEMON_DATA[index].id}.png`;
		imgElement.alt = POKEMON_DATA[index].name;
		
		item.classList.remove('selected-list-item');
		if (POKEMON_DATA[index].name == 'pikachu'){
			item.classList.add('selected-list-item');
		}

	});

	// Clicking on the List of Pokemon
	pokemonListItems.forEach(function(item, index){
		item.addEventListener('click', () => {
			
			currentPokemonIndex[0] = Math.floor(index/3)
			currentPokemonIndex[1] = index%3
			
			DetailDisplay(item);
		});
	});


	// Grid Dimensions
	const navGridColumns = [0,1,2]
	const navGridRows = [0,1,2,3,4]
	// Format: (row,col)
	let currentPokemonIndex = [1,0];
	
	// Navigation Buttons
	const leftButton = document.querySelector('.arrow.left').addEventListener('click', () => navigate('left'));
    const upButton = document.querySelector('.arrow.up').addEventListener('click', () => navigate('up'));
    const rightButton = document.querySelector('.arrow.right').addEventListener('click', () => navigate('right'));
    const downButton = document.querySelector('.arrow.down').addEventListener('click', () => navigate('down'));

	function navigate(direction) {
		
		switch(direction) {
			case 'up':
				if (currentPokemonIndex[0] > 0){
					currentPokemonIndex[0] = currentPokemonIndex[0]-1;
					let index = (currentPokemonIndex[0]*3)+currentPokemonIndex[1]
					let poki = pokemonListItems[index]
					DetailDisplay(poki)
				}
				break;

			case 'down':
				if (currentPokemonIndex[0] < 4){
					currentPokemonIndex[0] = currentPokemonIndex[0]+1;
					let index = (currentPokemonIndex[0]*3)+currentPokemonIndex[1]
					let poki = pokemonListItems[index]
					DetailDisplay(poki)
				}
				break;

			case 'left':
				if (currentPokemonIndex[1] > 0){
					currentPokemonIndex[1] = currentPokemonIndex[1]-1;
					let index = (currentPokemonIndex[0]*3)+currentPokemonIndex[1]
					let poki = pokemonListItems[index]
					DetailDisplay(poki)
				}
				break;

			case 'right':
				if (currentPokemonIndex[1] < 2){
					currentPokemonIndex[1] = currentPokemonIndex[1]+1;
					let index = (currentPokemonIndex[0]*3)+currentPokemonIndex[1]
					let poki = pokemonListItems[index]
					DetailDisplay(poki)
				}
				break;
		}
	}

	// Pokémon List Keyboard Navigation
	document.addEventListener('keydown', (event) => {
		switch (event.key) {
			case 'ArrowUp':
				navigate('up');
				break;
			case 'ArrowDown':
				navigate('down');
				break;
			case 'ArrowLeft':
				navigate('left');
				break;
			case 'ArrowRight':
				navigate('right');
				break;
		}
	});

}