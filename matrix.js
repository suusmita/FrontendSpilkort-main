   // Fetch data from the API for each card
for (let cardId = 1; cardId <= 52; cardId++) {
    fetch(`https://backendspillekort.azurewebsites.net/api/cards/${cardId}`)
        .then(response => response.json())
        .then(data => {
            // Update the content of the corresponding cell
            const cell = document.getElementById(`${cardId}`);

            if (cell) {
                // Update the name
                const nameElement = document.createElement('div');
                nameElement.textContent = data.paoentry.name;

                // Update the image
                const imageElement = document.createElement('img');
                imageElement.src = data.paoentry.image;
                imageElement.alt = data.paoentry.name + ' Image';

                // Update the action
                const actionElement = document.createElement('div');
                actionElement.textContent =  data.paoentry.action;

                // Update the object
                const objectElement = document.createElement('div');
                objectElement.textContent =  data.paoentry.object;

                // Clear existing content and append new elements
                cell.innerHTML = '';
                cell.appendChild(nameElement);
                cell.appendChild(imageElement);
                cell.appendChild(actionElement);
                cell.appendChild(objectElement);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

