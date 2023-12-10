# FrontendSpilkort

  <script>
    // Fetch data from the API
    fetch('http://localhost:8080/api/cards/1')
        .then(response => response.json())
        .then(data => {
            // Update the content of the first row
            const cell = document.getElementById('Hearts-SPORT-ATHLETE');
            
            // Update the name
            const nameElement = document.createElement('div');
            nameElement.textContent = data.paoentry.name;

            // Update the image
            const imageElement = document.createElement('img');
            imageElement.src = data.paoentry.image;
            imageElement.alt = data.paoentry.name + ' Image';

            // Update the action
            const actionElement = document.createElement('div');
            actionElement.textContent = 'Action: ' + data.paoentry.action;

            // Update the object
            const objectElement = document.createElement('div');
            objectElement.textContent = 'Object: ' + data.paoentry.object;

            // Clear existing content and append new elements
            cell.innerHTML = '';
            cell.appendChild(nameElement);
            cell.appendChild(imageElement);
            cell.appendChild(actionElement);
            cell.appendChild(objectElement);

            // Add similar lines for other cells as needed
        })
        .catch(error => console.error('Error fetching data:', error));
</script>