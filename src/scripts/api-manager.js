const concertUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${concertKey}&unit=miles&locale=*&size=10&city=Nashville&countryCode=US&stateCode=TN&segmentName=Music&preferredCountry=us`;

const apiManager = {
    getItenerary(){
        return fetch("http://localhost:8088/itinerary")
        .then(response => response.json());
    },
    postDataIt(iteneraryObj) {
        return fetch("http://localhost:8088/itinerary", { // Replace "url" with your API's URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(iteneraryObj)
        });
    },
    searchConcert(searchCriteria, category, key, page) {
        const url = concertUrl + `${key}${searchCriteria}&page=${page}`;
        return fetch(url)
            .then(response => response.json())
            .catch((error) => {
                alert("searchConcert " + error);
                document.getElementById('search-results').innerHTML = `Sorry, our concert ${category} search is currently down. Try our other searches.`;
            });
    }
}

export default apiManager;