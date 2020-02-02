const artsHTML = document.getElementById("search-arts");

let artsFilteredOptionsArray = [];

const artsHtmlToDom = () => {
    let arts__HTML = `
    <label for="search-concerts">Search Public Art Collections</label>
    <select name="artSelector" id="artSelector">`

    for (let i = 0; i < artsFilteredOptionsArray.length; i++) {
        arts__HTML += `<option value="${artsFilteredOptionsArray[i]}">${artsFilteredOptionsArray[i]}</option>`
    }

    arts__HTML += `
    </select >
    <button id="search-arts-btn">Submit</button>
    </div >
    `
    artsHTML.innerHTML = arts__HTML;
}

const options_array = arts_api_locations_Manager.searchArts();

const artsHtmlToDomFunction = () => {
    options_array.then(searchResults => {
        // console.log(searchResults);
        arts_searchResultsDomManager.parseLocationResults(searchResults);
        // console.log(artsOptionsArray);
        artsFilteredOptionsArray = Array.from(new Set(artsOptionsArray));
        artsFilteredOptionsArray.sort();
        // console.log(artsFilteredOptionsArray);
        artsHtmlToDom();
        arts_searchEventManager.addSearchClickEventListener();
    })
}


artsHtmlToDomFunction();

