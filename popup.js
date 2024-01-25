console.log('This is a popup!');
const search = document.getElementById('search');
const word = document.getElementById('wordInput');
const displayWord = document.getElementById('word');
const displayDefinition = document.getElementById('definition');
const definitionPage = document.getElementById('definitionPage');
const frontCover = document.getElementById('wordInputContainer');
const resetButton = document.getElementById('reset');

const apiKey = "rl4fAPtIQ2wRhdSyKEdGfw==G8gVVONAtSijPD3n"
const apiUrl = "https://api.api-ninjas.com/v1/dictionary?word="

search.addEventListener('click', () => {
const wordToSearch = word.value;
console.log(`${apiUrl}${wordToSearch}`);
if(wordToSearch){
fetch(`${apiUrl}${wordToSearch}`,{
    headers: {
        'X-Api-Key': apiKey
    }
})
.then(response => response.json())
.then(data => {
    console.log(data)
    displayWord.textContent = wordToSearch;
    displayDefinition.textContent = data.definition;
    definitionPage.style.display = 'flex';
    frontCover.style.display = 'none';
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    }
});

resetButton.addEventListener('click', () => {
    word.value = null;
    definitionPage.style.display = 'none';
    frontCover.style.display = 'flex';
});

