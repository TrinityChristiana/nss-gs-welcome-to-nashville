import inputManager from './inputManager.js';
import DOMManager from './DOMManager.js';
import apiManager from './api-manager.js';
import concertsDOMManager from "./concerts/concerts-searchResultsDomManager.js"

const eventManager = {
    runIt() {
        this.itinerarySaveEvent();
        this.itineraryTabEvent();
    },
    itinerarySaveEvent() {
        document.getElementById("itinerary-btn").addEventListener("click", () => {
            const itineraryHTML = document.getElementById("itinerary");
            const itineraryTextwSpaces = itineraryHTML.textContent.split("\n");
            const itineraryText = itineraryTextwSpaces.filter(element => {
                if (/\S/.test(element)) {
                    return element;
                }
            });
            itineraryText.pop();

            const itineraryArray = itineraryText.map(element => {
                const newElement = element.split(": ");
                return newElement.slice(1, newElement.length);


            });

            const iteneraryObj = {
                park: itineraryArray[0].toString(),
                concert: itineraryArray[1].toString(),
                restaurant: itineraryArray[2].toString(),
                arts: itineraryArray[3].toString()
            }

            apiManager.postDataIt(iteneraryObj) /* post */
            return itineraryArray;
        });
    },
    itineraryTabEvent() {
        document.getElementById("view-itineraries-link").addEventListener("click", () => {
            DOMManager.toggleItenreary();
        });
    },
    popUpEvent(topic, categories, options, concertKey) {
        const searchBoxHTML = document.getElementById("searchBoxHTML");
        categories.forEach(category => {

            
            const searchTopicCategory = document.getElementsByClassName(`search-${topic.toLowerCase()}-${category.toLowerCase()}`);
            for (let index = 0; index < searchTopicCategory.length; index++) {
                const element = searchTopicCategory[index];
                element.addEventListener("click", (e) => {
                    searchBoxHTML.innerHTML = DOMManager.getSearchInputHTML(topic, category);
                    DOMManager.makeOptions(topic, category, options);
                    document.getElementById("search-item").getElementsByTagName("div")[0].classList.remove("disabled");
                    this.searchEvent(options, concertKey);
    
                });    
            }
        });

    },
    searchEvent(options, concertKey) {
        document.getElementById("search-icon").addEventListener("click", () => {
            const inputData = inputManager.runIt(options);
            const searchText = inputData.input;
            const category = inputData.category;
            let loader = `
                <div class="ui active inverted dimmer">
                <div class="ui text loader">Loading</div>
              </div>
                `;
                document.getElementById('search-results').innerHTML = loader;
            apiManager.searchConcert(inputData.id, category, "&genreId=", 0, concertKey)
                .then(data => {
                    if ("_embedded" in data) {
                        concertsDOMManager.renderResults(data._embedded.events, data.page.totalPages, category, searchText);

                    } else {
                        concertsDOMManager.renderResults(`There are no concerts of the genre "${searchText}" at this time`);
                    }
                });

        });

        document.getElementById("search-input").addEventListener("keyup", (e) => {
            if (e.keyCode == 13) {
                const inputData = inputManager.runIt(options);


            }
        });
    }

}

export default eventManager;