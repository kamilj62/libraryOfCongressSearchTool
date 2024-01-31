// TODO: Collect a reference to the form with id "search-form"

function handleSearchFormSubmit(event) {
	event.preventDefault();

	// TODO: Add a comment to explain the purpose of lines 7 and 8
	var searchInputVal = document.querySelector('#search-input').value;
	var formatInputVal = document.querySelector('#format-input').value;

	// TODO: Add a comment to explain the purpose of lines 11-14
	if (!searchInputVal) {
		console.error('You need a search input value!');
		return;
	}

	// TODO: Add a comment to explain the purpose of lines 17 and 18
	var queryString =
		'./search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;
	location.assign(queryString);
}

// TODO: Add a 'submit' event listener to the form with id "search-form". A 'submit' event will trigger the 'handleSearchFormSubmit' function
