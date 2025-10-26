const API_URL = 'https://thesimpsonsapi.com/api/characters';

const character_image = document.getElementById('image_url');
const character_name = document.getElementById('name');
const character_age = document.getElementById('age');
const character_phrase = document.getElementById('phrase');
const new_character_btn = document.getElementById('new_character_btn');


function getCharacter() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const random = data.results[Math.floor(Math.random() * data.results.length)];
            character_name.textContent = random.name.toUpperCase();
            character_image.src = 'https://cdn.thesimpsonsapi.com/500' + random.portrait_path;
            character_age.textContent = random.age ? random.age + " years" : "";
            const randomPhrase = (random.phrases && random.phrases.length > 0) ? random.phrases[Math.floor(Math.random() * random.phrases.length)] : "";
            if (randomPhrase) {
                character_phrase.textContent = `"${randomPhrase}"`;
            } else {
                character_phrase.textContent = "";
            }
        })
        .catch(error => console.error('Error:', error));
}

new_character_btn.addEventListener('click', getCharacter);
getCharacter();
