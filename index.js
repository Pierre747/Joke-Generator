const header = document.getElementById('header');
const content = document.getElementById('content');

const getJoke = () => {
	fetch('https://api.blablagues.net/?rub=blagues')
		.then((res) => res.json())
		.then((data) => {
			const joke = data.data.content; // afin de destructurer la réponse et rendre le contenu lisible
			header.textContent = joke.text_head;
			content.textContent =
				joke.text !== '' // Pour afficher les réponses aux devinettes qui sont cachées par l'API
					? joke.text
					: joke.text_hidden;
		});
};
getJoke();

document.body.addEventListener('click', () => {
	getJoke();
});
