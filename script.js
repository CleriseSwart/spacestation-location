// Get references to the HTML elements that will display latitude and longitude
const latitudeElement = document.getElementById('latitude');
const longitudeElement = document.getElementById('longitude');

// Function to fetch ISS location and update the HTML elements
async function fetchISSLocation() {
    try {
        // Send a GET request to the ISS location API
        const response = await fetch('http://api.open-notify.org/iss-now.json');
        
        // Parse the response JSON data
        const data = await response.json();
        
        // Extract latitude and longitude from the API response
        const latitude = data.iss_position.latitude;
        const longitude = data.iss_position.longitude;

        // Update the HTML elements with the new location data
        latitudeElement.textContent = latitude;
        longitudeElement.textContent = longitude;
    } catch (error) {
        // Handle errors by logging and displaying "N/A" for location
        console.log('Error fetching ISS location:', error);
        latitudeElement.textContent = 'N/A';
        longitudeElement.textContent = 'N/A';
    }
}

// Call the fetchISSLocation function immediately to get initial data
fetchISSLocation();

// Fetch ISS location every 5 seconds to keep the data updated
setInterval(fetchISSLocation, 5000);
