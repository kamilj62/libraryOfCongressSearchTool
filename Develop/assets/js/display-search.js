// TODO: Collect a reference to the form with id "search-form"
// TODO: Collect a reference to the span with id "result-text"
// TODO: Collect a reference to the div with id "result-content"

function getParams() {
	console.log('document.location:', document.location);

	// TODO: Use the 'search' property of the 'document.location' object to retrieve the search params out of the URL (i.e. `?q=london&format=photo`)

	// TODO: Extract the search term and the format from the string retrieved in the previous step

	// TODO: Invoke the searchApi function, passing in the search term and format values as arguments
}

getParams();

function searchApi(searchTerm, format) {
	console.log('searchTerm:', searchTerm);
	console.log('format:', format);

	// TODO: Build the request URL

	// TODO: Make a fetch to the request URL and display the results
}

function handleNewSearch(event) {
	event.preventDefault();

	// TODO: Collect values entered by user

	// TODO: Exit if user did not enter a search value

	// TODO: Invoke the searchApi function, passing as arguments the values collected from the user
}

// TODO: Add a 'submit' event listener to the form with id "search-form". A 'submit' event will trigger the 'handleNewSearch' function
