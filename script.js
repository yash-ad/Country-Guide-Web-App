// Get references to HTML elements
let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-input');
let resetBtn = document.getElementById('reset-btn');
let result = document.getElementById('result');

// Define an asynchronous function to search for country information.
const searchCountry = async () => {
    try {
     // Get the input value for the country name
        let countryName = countryInp.value;
        
        // Construct the URL for fetching country information
        let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

        const response = await fetch(finalURL);
        const data = await response.json();

        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
                <h2>${data[0].name.common}</h2>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Capital :</h4>
                        <span>${data[0].capital[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Continent :</h4>
                        <span>${data[0].continents[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Population :</h4>
                        <span>${data[0].population}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Currency :</h4>
                        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Common Languages :</h4>
                        <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                    </div>
                </div>
        `;

    } catch (error) {
        if (countryName.length === "") {
            result.innerHTML = `<h3>The input field cannot be empty</h3>`;
        } else {
            result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
        }

        setTimeout(() => {
            result.innerHTML = "";
        }, 3000);
    }
}

// Click event
searchBtn.addEventListener('click', searchCountry);

// Keypress event
countryInp.addEventListener('keydown', async (event) => {
    if (event.key === "Enter"|| event.keyCode === 13 || event.key === ' ' || event.keyCode === 32) {

        event.preventDefault();

        await searchCountry();
    }
});

resetBtn.addEventListener('click', () => {
    location.reload();
});
