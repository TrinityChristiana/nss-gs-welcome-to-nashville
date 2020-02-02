const eventManager = {
    itinerarySaveEvent() {
        document.getElementById("itinerary-btn").addEventListener("click", () => {
            i++;
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
    popUpEvent(topic, categories) {
        console.log(categories);
        categories.forEach(element => {
            document.getElementById(`search-${topic.toLowerCase()}-${element.toLowerCase()}`).addEventListener("click", (e) => {
                document.getElementById("search-input").placeholder = element;
                document.getElementById("search-item").getElementsByTagName("div")[0].classList.remove("disabled");
                document.getElementById("menu-title").innerText = `${topic}`;
            });
        });

    }
}

export default eventManager;