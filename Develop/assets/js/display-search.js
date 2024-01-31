// TODO: Collect a reference to the form with id "search-form"
var searchFormEl = document.querySelector('#search-form');
// TODO: Collect a reference to the span with id "result-text"
var resultTextEl = document.querySelector('#result-text');
// TODO: Collect a reference to the div with id "result-content"
var resultContentEl = document.querySelector('#result-content');


function getParams() {
	console.log('document.location:', document.location);

	// TODO: Use the 'search' property of the 'document.location' object to retrieve the search params out of the URL (i.e. `?q=london&format=photo`)
	var queryString = window.location.search;
	var searchParams = new URLSearchParams(queryString);

	// TODO: Extract the search term and the format from the string retrieved in the previous step
	var searchTerm = searchParams.get('q');
	var format = searchParams.get('format');

	console.log('Search Term:', searchTerm);
	console.log('Format:', format);

	// TODO: Invoke the searchApi function, passing in the search term and format values as arguments
	searchApi(searchTerm, format)
}

getParams();

function searchApi(searchTerm, format) {
	console.log('searchTerm:', searchTerm);
	console.log('format:', format);
  
// TODO: Build the request URL
var apiUrl = "https://www.loc.gov/"+ format +"/?q=" + searchTerm + "&fo=json";
console.log(apiUrl);

// TODO: Make a fetch to the request URL and display the results
fetch(apiUrl)
  .then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		throw new Error('Error: ' + response.statusText);
	}
  })
	.then(function (response) {
		console.log(response);
		console.log(response.featured_items);

		// Clear results before running a new one
		resultContentEl.textContent = "";
		
		var results = response.featured_items;

			for (let i = 0; i < results.length; i++) {
				var newElement = document.createElement('div');
				newElement.textContent = results[i].title;
				resultContentEl.appendChild(newElement);
			}
		resultTextEl.textContent = searchTerm + " in " + format
	})
}

	function handleNewSearch(event) {
		event.preventDefault();

		// TODO: Collect values entered by user
		var search = document.querySelector('#search-input').value;
		var format = document.querySelector('#format-input').value;
		
		// TODO: Exit if user did not enter a search value
		if ((!search || !format)) {
			alert("No repositories found.");
			return;
		}	

		// TODO: Invoke the searchApi function, passing as arguments the values collected from the user
		searchApi(search, format);
}

//TODO: Add a 'submit' event listener to the form with id "search-form". A 'submit' event will trigger the 'handleNewSearch' function
searchFormEl.addEventListener('submit', handleNewSearch);
