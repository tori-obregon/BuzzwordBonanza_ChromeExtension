console.log('This is a popup!');
const search = document.getElementById('search');
const word = document.getElementById('wordInput');
const displayWord = document.getElementById('word');
const displayDefinition = document.getElementById('definition');


const apiKey = "rl4fAPtIQ2wRhdSyKEdGfw==G8gVVONAtSijPD3n"
const apiUrl = "https://api.api-ninjas.com/v1/dictionary?word="

search.addEventListener('click', () => {
const wordToSearch = word.value;
if(wordToSearch !== ''){
fetch(`${apiUrl}${wordToSearch}`,{
    headers: {
        'X-Api-Key': apiKey
    }
})
.then(response => response.json())
.then(data => {
    displayWord.textContent = wordToSearch;
    displayDefinition.textContent = data.definition;
})





}
})


