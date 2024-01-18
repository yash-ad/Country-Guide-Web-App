let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-input');
let resetBtn = document.getElementById('reset-btn');
let result = document.getElementById('result');

// Click event

searchBtn.addEventListener('click',()=>{

    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    fetch(finalURL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
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
    // Display the error message
    if (countryName.length == "") {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
    } else {
        result.innerHTML = `<h3>Please enter a valid country name</h3>`;
    }

    // Clear the error message after 2-3 seconds
    setTimeout(() => {
        result.innerHTML = '';
    }, 2000); // Adjust the timeout duration based on your preference
});
  
})

resetBtn.addEventListener('click', () => {
    location.reload();
});
