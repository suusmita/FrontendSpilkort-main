
var isPopupOpen = false;

function openPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
  isPopupOpen = true;
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
  isPopupOpen = false;
}

function togglePopup() {
  if (isPopupOpen) {
    closePopup();
  } else {
    openPopup();
  }
}

document.getElementById('closeButton').addEventListener('click', closePopup);

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'm') {
      if (isPopupOpen) {
        closePopup();
      } else {
        openPopup();
      }
      event.preventDefault(); // Prevent default behavior of the 'Ctrl + m' key combination
    }
  });

     
async function fetchCardValuesFromURL(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching card values:', error);
        return [];
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    const cardValues = await fetchCardValuesFromURL('https://backendspillekort.azurewebsites.net/api/cards/values');

    const cardInput = document.getElementById('cardInput');
    const cardSuggestionContainer = document.getElementById('cardSuggestionContainer');

    cardInput.addEventListener('input', function () {
        const input = this.value;
        const suggestions = document.getElementById('cardSuggestionContainer');
        suggestions.innerHTML = '';

        // Filter and sort card values based on input
        const filteredCardValues = cardValues
            .filter(cardValue => cardValue.toLowerCase().includes(input.toLowerCase()))
            .sort(customSort(input));

        // Display suggestions in a dropdown-like manner
        filteredCardValues.forEach(cardValue => {
            const suggestion = document.createElement('div');
            suggestion.classList.add('suggestion');
            suggestion.textContent = cardValue;
            suggestion.addEventListener('click', () => {
                cardInput.value = cardValue;
                suggestions.innerHTML = ''; // Clear suggestions after selection
                validateInput(cardInput, globalCard); // Call the validation function
            });
            suggestions.appendChild(suggestion);
        });

        // If no suggestions, hide the suggestion container
        suggestions.style.display = filteredCardValues.length ? 'block' : 'none';
    });

    // Close suggestions when clicking outside the input and suggestions
    document.addEventListener('click', function (event) {
        if (event.target !== cardInput && !cardInput.contains(event.target) && event.target !== cardSuggestionContainer && !cardSuggestionContainer.contains(event.target)) {
            cardSuggestionContainer.style.display = 'none';
        }
    });
});





async function fetchNamesFromURL(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching names:', error);
        return [];
    }
}

// Custom sorting function: prioritize names starting with the input text
const customSort = (input) => (a, b) => {
    const aStartsWithInput = a.toLowerCase().startsWith(input.toLowerCase());
    const bStartsWithInput = b.toLowerCase().startsWith(input.toLowerCase());

    if (aStartsWithInput && !bStartsWithInput) {
        return -1;
    } else if (!aStartsWithInput && bStartsWithInput) {
        return 1;
    } else {
        return a.localeCompare(b);
    }
};
document.addEventListener('DOMContentLoaded', async function () {
const names = await fetchNamesFromURL('https://backendspillekort.azurewebsites.net/api/person/names');

const nameInput = document.getElementById('nameInput');
const suggestionContainer = document.getElementById('suggestionContainer');

nameInput.addEventListener('input', function () {
    const input = this.value;
    const suggestions = document.getElementById('suggestionContainer');
    suggestions.innerHTML = '';

    // Filter and sort names based on input
    const filteredNames = names
        .filter(name => name.toLowerCase().includes(input.toLowerCase()))
        .sort(customSort(input));

    // Display suggestions in a dropdown-like manner
    filteredNames.forEach(name => {
        const suggestion = document.createElement('div');
        suggestion.classList.add('suggestion');
        suggestion.textContent = name;
        suggestion.addEventListener('click', () => {
            nameInput.value = name;
            suggestions.innerHTML = ''; // Clear suggestions after selection
            validateInput(nameInput, globalName); // Call the validation function
        });
        suggestions.appendChild(suggestion);
    });

    // If no suggestions, hide the suggestion container
    suggestions.style.display = filteredNames.length ? 'block' : 'none';
});

// Close suggestions when clicking outside the input and suggestions
document.addEventListener('click', function (event) {
    if (event.target !== nameInput && !nameInput.contains(event.target) && event.target !== suggestionContainer && !suggestionContainer.contains(event.target)) {
        suggestionContainer.style.display = 'none';
    }
});
});




    async function fetchActionsFromURL(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching actions:', error);
            return [];
        }
    }

    document.addEventListener('DOMContentLoaded', async function () {
        const actions = await fetchActionsFromURL('https://backendspillekort.azurewebsites.net/api/person/actions');

        const actionInput = document.getElementById('actionInput');
        const actionSuggestionContainer = document.getElementById('actionSuggestionContainer');

        actionInput.addEventListener('input', function () {
            const input = this.value;
            const suggestions = document.getElementById('actionSuggestionContainer');
            suggestions.innerHTML = '';

            // Filter and sort actions based on input
            const filteredActions = actions
                .filter(action => action.toLowerCase().includes(input.toLowerCase()))
                .sort(customSort(input));

            // Display suggestions in a dropdown-like manner
            filteredActions.forEach(action => {
                const suggestion = document.createElement('div');
                suggestion.classList.add('suggestion');
                suggestion.textContent = action;
                suggestion.addEventListener('click', () => {
                    actionInput.value = action;
                    suggestions.innerHTML = ''; // Clear suggestions after selection
                    validateInput(actionInput, globalAction); // Call the validation function

                });
                suggestions.appendChild(suggestion);
            });

            // If no suggestions, hide the suggestion container
            suggestions.style.display = filteredActions.length ? 'block' : 'none';
        });

        // Close suggestions when clicking outside the input and suggestion
    });

    async function fetchObjectsFromURL(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching objects:', error);
            return [];
        }
    }

    document.addEventListener('DOMContentLoaded', async function () {
        const objects = await fetchObjectsFromURL('https://backendspillekort.azurewebsites.net/api/person/objects');

        const objectInput = document.getElementById('objectInput');
        const objectSuggestionContainer = document.getElementById('objectSuggestionContainer');

        objectInput.addEventListener('input', function () {
            const input = this.value;
            const suggestions = document.getElementById('objectSuggestionContainer');
            suggestions.innerHTML = '';

            // Filter and sort objects based on input
            const filteredObjects = objects
                .filter(object => object.toLowerCase().includes(input.toLowerCase()))
                .sort(customSort(input));

            // Display suggestions in a dropdown-like manner
            filteredObjects.forEach(object => {
                const suggestion = document.createElement('div');
                suggestion.classList.add('suggestion');
                suggestion.textContent = object;
                suggestion.addEventListener('click', () => {
                    objectInput.value = object;
                    suggestions.innerHTML = ''; // Clear suggestions after selection
                    validateInput(objectInput, globalObject);

                });
                suggestions.appendChild(suggestion);
            });

            // If no suggestions, hide the suggestion container
            suggestions.style.display = filteredObjects.length ? 'block' : 'none';
        });

     
    });


        let globalName; // Declare a global variable
        let globalAction;
        let globalObject;
        let globalCard;
    let data; // Declare data as a global variable
   

    var numbers = [];
for (var i = 1; i <= 52; i++) {
  numbers.push(i);
}

// Function to shuffle the array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    // Swap array[i] and array[j]
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// Shuffle the array of numbers
shuffleArray(numbers);

let currentIndex = numbers[0]; 

    let checkboxStates = {
        name: false,
        action: false,
        object: false,
        card: false,
    };

    // Function to set the input value based on the checkbox
    function revealValue(inputId, checkboxId, dataProperty) {
        const inputElement = document.getElementById(inputId);
        const checkboxElement = document.getElementById(checkboxId);

        // Update checkbox state
        checkboxStates[dataProperty] = checkboxElement.checked;

        // Set the input value to data.paoentry[dataProperty] when the checkbox is checked
        inputElement.value = checkboxStates[dataProperty] ? data.paoentry[dataProperty] : '';

        // Validate the input value
        validateInput(inputElement, data.paoentry[dataProperty]);
    }

    function validateInput(inputElement, correctValue) {
    const inputValue = inputElement.value;

    // Log the values for debugging
    console.log('Input Value:', inputValue);
    console.log('Correct Value:', correctValue);
    console.log('Background Color:', inputElement.style.backgroundColor);

    // Set background color to white if the input is empty, otherwise use red or green
    inputElement.style.backgroundColor = inputValue === '' ? 'white' : (inputValue.toLowerCase() === correctValue.toLowerCase() ? 'green' : 'red');
}

function revealValueForCard(inputId, checkboxId) {
    const inputElement = document.getElementById(inputId);
    const checkboxElement = document.getElementById(checkboxId);

    // Update checkbox state
    checkboxStates.card = checkboxElement.checked;

    // Set the input value to data.card when the checkbox is checked
    inputElement.value = checkboxStates.card ? data.card : '';

    // Validate the input value
    validateInputForCard(inputElement, data.card);
}

function validateInputForCard(inputElement, correctValue) {
    const inputValue = inputElement.value;
    const correctValueLowercase = String(correctValue).toLowerCase();

    // Set background color to white if the input is empty, otherwise use red or green
    inputElement.style.backgroundColor = inputValue === '' ? 'white' : (inputValue.toLowerCase() === correctValueLowercase ? 'green' : 'red');

    // Add console logs to check the values
    console.log('Input Value:', inputValue);
    console.log('Correct Value:', correctValueLowercase);
    console.log('Background Color:', inputElement.style.backgroundColor);
}



    

    // Function to fetch data from the API based on the shuffled array
async function fetchData(index) {
    const apiUrl = `https://backendspillekort.azurewebsites.net/api/cards/${index}`;

    try {
        const response = await fetch(apiUrl);
        const apiData = await response.json();

        data = apiData;
        const imageElement = document.getElementById('image');
        const nameElement = document.createElement('div');
        nameElement.textContent = data.paoentry.name;

        globalName = data.paoentry.name; // Set the value to the global variable
        globalAction = data.paoentry.action;
        globalObject = data.paoentry.object;
        globalCard = data.card;  // Use data.card here

        console.log(globalCard);

        imageElement.src = data.paoentry.image;
        imageElement.alt = data.paoentry.name + ' Image';

        document.getElementById('autoRevealNameCheckbox').addEventListener('change', () => {
            revealValue('nameInput', 'autoRevealNameCheckbox', 'name');
        });

        document.getElementById('autoRevealActionCheckbox').addEventListener('change', () => {
            revealValue('actionInput', 'autoRevealActionCheckbox', 'action');
        });

        document.getElementById('autoRevealObjectCheckbox').addEventListener('change', () => {
            revealValue('objectInput', 'autoRevealObjectCheckbox', 'object');
        });
        document.getElementById('autoRevealcardsCheckbox').addEventListener('change', () => {
            revealValueForCard('cardInput', 'autoRevealcardsCheckbox');  // Updated to use revealValueForCard
        });

        document.getElementById('nameInput').addEventListener('input', (event) => {
            validateInput(event.target, data.paoentry.name);
        });

        document.getElementById('actionInput').addEventListener('input', (event) => {
            validateInput(event.target, data.paoentry.action);
        });

        document.getElementById('objectInput').addEventListener('input', (event) => {
            validateInput(event.target, data.paoentry.object);
        });
        document.getElementById('cardInput').addEventListener('input', (event) => {
            validateInputForCard(event.target, data.card);  // Use validateInputForCard for card
        });

        // Set checkbox states based on the stored values
        document.getElementById('autoRevealNameCheckbox').checked = checkboxStates.name;
        document.getElementById('autoRevealActionCheckbox').checked = checkboxStates.action;
        document.getElementById('autoRevealObjectCheckbox').checked = checkboxStates.object;
        document.getElementById('autoRevealcardsCheckbox').checked = checkboxStates.card;

        // Set input values based on checkbox states
        revealValue('nameInput', 'autoRevealNameCheckbox', 'name');
        revealValue('actionInput', 'autoRevealActionCheckbox', 'action');
        revealValue('objectInput', 'autoRevealObjectCheckbox', 'object');
        revealValueForCard('cardInput', 'autoRevealcardsCheckbox');  // Updated to use revealValueForCard

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
    // Function to start the timer
    let timerInterval; // Variable to store the timer interval

    function startTimer() {
        let startTime = Date.now(); // Get the current time when the quiz page loads

        // Update the timer every second
        timerInterval = setInterval(function() {
            let currentTime = Date.now();
            let elapsedTime = currentTime - startTime;
            
            let seconds = Math.floor(elapsedTime / 1000);
            let minutes = Math.floor(seconds / 60);
            seconds = seconds % 60;

            // Display the timer in the 'timer' element
            document.getElementById('timer').innerText = `Timer: ${minutes}m ${seconds}s`;

            // Check if the message div is filled, if so, stop the timer
            let messageDiv = document.getElementById('message');
            if (messageDiv.innerText.trim().length > 0) {
                clearInterval(timerInterval); // Stop the timer
            }
        }, 1000);
    }

    // Call the function to start the timer when the page loads
    window.onload = startTimer;

var numbers = [];
for (var i = 1; i <= 52; i++) {
  numbers.push(i);
}

// Function to shuffle the array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    // Swap array[i] and array[j]
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// Shuffle the array of numbers
shuffleArray(numbers);


// next btn shortcut
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'n') {
      moveToNextCard()
      event.preventDefault(); // Prevent default behavior of the 'Ctrl + n' key combination
    }
  });

let tryCount = 0; // Initialize a counter for the number of tries

// Function to move to the next person
function moveToNextCard() {
    tryCount++; // Increment the try count
    currentIndex++; // Increment the currentIndex

    // Check if we have reached the end of the array
    if (currentIndex >= numbers.length) {
        // Optionally, you can reset the index or perform any desired action
        currentIndex = 0;
    }

    console.log(tryCount);

    // Check if 52 tries have been reached
    if (tryCount >= 52) {
        console.log("You have reached the end.");
        document.getElementById('message').innerHTML = "You have reached the end!";

        // Optionally, you can perform any action or show a message to the user
        return; // Exit the function to stop further fetch attempts
    }

    fetchData(numbers[currentIndex]);
}

fetchData(currentIndex); // Initial fetch


// restart game function

function restartPage() {
    location.reload(); // Reloads the current page
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'r') {
      restartPage()
      event.preventDefault(); // Prevent default behavior of the 'Ctrl + r' key combination
    }
  });

  function revealAnswers() {
    // Set the input values to the corresponding global variables
    document.getElementById('nameInput').value = globalName;
    document.getElementById('actionInput').value = globalAction;
    document.getElementById('objectInput').value = globalObject;
    document.getElementById('cardInput').value = globalCard;

    // Validate the input values
    validateInput(document.getElementById('nameInput'), globalName);
    validateInput(document.getElementById('actionInput'), globalAction);
    validateInput(document.getElementById('objectInput'), globalObject);
    validateInputForCard(document.getElementById('cardInput'), globalCard);
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'b') {
      revealAnswers()
      event.preventDefault(); // Prevent default behavior of the 'Ctrl + b' key combination
    }
  });






