# Country-Guide-Web-App
Developed a dynamic web application that retrieves and displays detailed information about countries using the Restcountries API. The app allows users to input a country name, fetches real-time data, and presents a comprehensive overview, including the country's flag, capital, continent, population, currency, and common languages.

## HTML Elements:-
```javascript
let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-input');
let resetBtn = document.getElementById('reset-btn');
let result = document.getElementById('result');
```
* `searchBtn` Represents the HTML button Element with the id `search-btn`.
* `countryInp`: Represents the HTML input element with the id `country-input`.
* resetBtn: Represents the HTML button element with the id 'reset-btn'.
* result: Represents the HTML element with the id 'result', which is likely a container where the search results will be displayed.
  
## Event Listeners:-
 * This event listener is triggered when the search button (searchBtn) is clicked.
```javascript
searchBtn.addEventListener('click', () => {
  // Code for handling the search button click event
});
```

* This event listener is triggered when the reset button (resetBtn) is clicked.
```javascript
resetBtn.addEventListener('click', () => {
  // Code for handling the reset button click event
});
```

## Search Button Click Event Handling:
```javascript
let countryName = countryInp.value;
let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

fetch(finalURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Code for handling successful API response and updating the result element
    result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img">
                <h2>${data[0].name.common}</h2>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Capital: </h4>
                        <span>${data[0].capital[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Continent: </h4>
                        <span>${data[0].continents[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Population:</h4>
                        <span>${data[0].population}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Currency:</h4>
                        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Common Languages:</h4>
                        <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                    </div>
                </div>
            `;
  })
  .catch(() => {
    // Code for handling errors in the API request or processing the response
     // Display the error message
    if (countryName.length == "") {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
    } else {
        result.innerHTML = `<h3>Please enter a valid country name</h3>`;
    }

    // Clear the error message after 2-3 seconds
    setTimeout(() => {
        result.innerHTML = '';
    }, 3000); // Adjust the timeout duration based on your preference
  });

```
* countryName: Retrieves the value entered in the country input field.
* finalURL: Constructs the URL for fetching country information from the "restcountries.com" API based on the entered country name.
  
 **  [Fetching Data:]
 * fetch(finalURL): Initiates a network request to the specified URL.
.then((response) => { return response.json(); }): Handles the response by converting it to JSON.
* .then((data) => { /* Code for processing the JSON data and updating the result element */ }): Processes the JSON data obtained from the API response.
  
** [Handling Errors:]
* .catch(() => { /* Code for handling errors, including displaying error messages */ }): Catches any errors that occur during the fetch operation, allowing for error handling.
  
** [Updating Result Element:]
The code inside the second .then() block updates the result element with HTML content based on the data retrieved from the API.

## Error Handling:
```javascript
if (countryName.length == "") {
    result.innerHTML = `<h3>The input field cannot be empty</h3>`;
} else {
    result.innerHTML = `<h3>Please enter a valid country name</h3>`;
}

// Clear the error message after 2-3 seconds
setTimeout(() => {
    result.innerHTML = '';
}, 3000);

```
* Checks if the country input field is empty and displays an appropriate error message.
* If a valid country name is not entered, it displays a different error message.
* Utilizes setTimeout to clear the error message after 2-3 seconds.
  
## Reset Button Click Event Handling:
```javascript
resetBtn.addEventListener('click', () => {
    location.reload();
});
```
Reloads the page when the reset button is clicked. This effectively resets the application state.

