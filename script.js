const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
  'Apple',
  'Apricot',
  'Avocado 🥑',
  'Banana',
  'Bilberry',
  'Blackberry',
  'Blackcurrant',
  'Blueberry',
  'Boysenberry',
  'Currant',
  'Cherry',
  'Coconut',
  'Cranberry',
  'Cucumber',
  'Custard apple',
  'Damson',
  'Date',
  'Dragonfruit',
  'Durian',
  'Elderberry',
  'Feijoa',
  'Fig',
  'Gooseberry',
  'Grape',
  'Raisin',
  'Grapefruit',
  'Guava',
  'Honeyberry',
  'Huckleberry',
  'Jabuticaba',
  'Jackfruit',
  'Jambul',
  'Juniper berry',
  'Kiwifruit',
  'Kumquat',
  'Lemon',
  'Lime',
  'Loquat',
  'Longan',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Marionberry',
  'Melon',
  'Cantaloupe',
  'Honeydew',
  'Watermelon',
  'Miracle fruit',
  'Mulberry',
  'Nectarine',
  'Nance',
  'Olive',
  'Orange',
  'Clementine',
  'Mandarine',
  'Tangerine',
  'Papaya',
  'Passionfruit',
  'Peach',
  'Pear',
  'Persimmon',
  'Plantain',
  'Plum',
  'Pineapple',
  'Pomegranate',
  'Pomelo',
  'Quince',
  'Raspberry',
  'Salmonberry',
  'Rambutan',
  'Redcurrant',
  'Salak',
  'Satsuma',
  'Soursop',
  'Star fruit',
  'Strawberry',
  'Tamarillo',
  'Tamarind',
  'Yuzu',
];

// This function filters the list of fruit based on user input and returns matching results
function search(str) {
  let results = [];

  // Use the filter method to create a new array containing fruit names that match the input
  results = fruit.filter((item) =>
    item.toLowerCase().includes(str.toLowerCase())
  );

  return results;
}

function searchHandler(e) {
  let userInput = e.target.value.trim();

  let suggestionsContainer = document.querySelector('.suggestions');

  // Check if the input is empty
  if (userInput === '') {
    suggestionsContainer.style.display = 'none';
  } else {
    let results = search(userInput);
    // Display matching suggestions and make the container visible
    showSuggestions(results, userInput);
    suggestionsContainer.style.display = 'block';
  }
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = '';
  results.forEach((result) => {
    let suggestionItem = document.createElement('li');
    suggestionItem.textContent = result;

    // Add event listeners to handle mouseover and mouseout effects
    suggestionItem.addEventListener('mouseover', function () {
      suggestionItem.style.background = '#f00098';
      suggestionItem.style.fontWeight = 'bold';
    });

    suggestionItem.addEventListener('mouseout', function () {
      suggestionItem.style.background = '';
      suggestionItem.style.fontWeight = '';
    });
    // Add an event listener to handle user selection of a suggestion
    suggestionItem.addEventListener('click', function () {
      input.value = result; // Populate the input with the selected suggestion
      suggestions.innerHTML = ''; // Clear the suggestions
    });
    suggestions.appendChild(suggestionItem);

    // Check if the suggestion matches the current input value and mark it as pre-search
    if (result === inputVal) {
      suggestionItem.classList.add('pre-search');
    }
  });
}

function useSuggestion(e) {
  // TODO
  if (e.target.tagName === 'LI') {
    let selectedSuggestions = e.target.textContent;
    inputVal = selectedSuggestions;
    suggestions.innerHTML = ''; // Clear the suggestions
  }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
