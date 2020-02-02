let searchText;
let genreId;
const concertEventManager = {
    // Adds event to search-link navbar link
    navbarEvent(category) {
        document.getElementById(`search-${category}-link`).addEventListener("click", () => {
            const searchForm = document.getElementById("formSearch").classList.add("hidden");
            const navbarDrop = document.getElementById("search-drop");

            document.getElementById("search-results").innerHTML = "";
            const nameArray = ["Genres", "Keyword"];

            DOMManager.untoggleItenreary();
        });
    },
    // dropEvent(id) {
    //     document.getElementById(id).addEventListener("click", () => {
    //         const searchInput = document.getElementById("search-input");
    //         searchInput.innerHTML = concertsDOMManager.renderSearchInput(id);
    //         if (id == "concerts-genres-option") {
    //             this.addEnterEvent("concerts");
    //             getGenreInformation.getGenreList();
    //         } else {

    //             this.addEnterEvent("concerts-keyword");
    //             this.addKeywordButtonEvent();
    //         }
    //         this.navbarEvent("concerts");

    //     });
    // },
    // Adds event to genre search button
    addButtonEventListener(genreObj) {
        const concertBtn = document.getElementById("search-concerts-btn");
        concertBtn.addEventListener("click", () => {

            const input = document.getElementById("search-concerts");
            searchText = input.value;
            let isGenre = true;
            isGenre = validateData.validateGenre(searchText, genreObj);
            let isEmpty = validateData.isEmpty(searchText);
            if (isEmpty) {
                alert("Input is empty!")
            } else if (isGenre) {
                const category = "genre";
                genreId = getGenreInformation.getGenreId(searchText, genreObj);
                // let loader = `<div class="boxLoading">Loading Searches...</div>`;
                let loader = `
                <div class="ui segment">
                    <div class="ui active dimmer">
                        <div class="ui text loader">Loading</div>
                    </div>
                    <p></p>
                </div>
                `;
                document.getElementById('search-results').innerHTML = loader;
                const concertResults = APIManager.searchConcert(genreId, category, "&genreId=", 0);
                concertResults.then(data => {
                    if ("_embedded" in data) {
                        concertsDOMManager.renderResults(data._embedded.events, data.page.totalPages, category, searchText);

                    } else {
                        concertsDOMManager.renderResults(`There are no concerts of the genre "${searchText}" at this time`);
                    }
                });
            } else {
                concertsDOMManager.renderResults(`There are no concerts of the genre "${searchText}" at this time. Please select one of the suggestions.`);
            }
            input.value = "";
        });

    },
    // Has enter key submit concert searches individually
    addEnterEvent(id) {
        const input = document.getElementById(`search-${id}`);

        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                document.getElementById(`search-${id}-btn`).click();
            }
        });

    },
    // Adds event to Save Button individually
    addSaveButtonEvent(id) {
        const saveButtons = document.getElementById(`concert-btn-${id}`);
        saveButtons.addEventListener("click", () => {
            DOMManager.renderItinerary(document.getElementById(`concert-name-${id}`).innerHTML, "concert");
        });
    },
    // Adds event to keyword search button
    addKeywordButtonEvent() {
        const concertKeyBtn = document.getElementById("search-concerts-keyword-btn");
        concertKeyBtn.addEventListener("click", () => {

            const input = document.getElementById("search-concerts-keyword");
            searchText = input.value;
            if (validateData.isEmpty(searchText)) {
                alert("Input is empty!");
            } else {
                let loader = `<div class="boxLoading">Loading Searches...</div>`;
                document.getElementById('search-results').innerHTML = loader;
                const concertResults = APIManager.searchConcert(searchText, "keyword", "&keyword=", 0);
                concertResults.then(data => {
                    if ("_embedded" in data) {
                        concertsDOMManager.renderResults(data._embedded.events, data.page.totalPages, "keyword", searchText);
                    } else {
                        concertsDOMManager.renderResults(`There are no concerts with the keyword "${searchText}" at this time`);
                    }
                });
            }
            input.value = "";
        });

    },
    // Adds Events to Page buttons individually
    addPagesButtonEvents(buttonNode, j, topic) {
        buttonNode.addEventListener("click", (e) => {
            let loader = `<div class="boxLoading">Loading Searches...</div>`;
            document.getElementById('search-results').innerHTML = loader;
            const noGenreMess = "There are no concerts of this genre at this time";
            if (topic == "genre") {
                APIManager.searchConcert(genreId, "topic", `&${topic}Id=`, j)
                    .then(data => {
                        const totalPages = data.page.totalPages;
                        if ("_embedded" in data) {
                            concertsDOMManager.renderResults(data._embedded.events, totalPages, topic, searchText, `${e.target.id}`);
                        } else {
                            concertsDOMManager.renderResults(noGenreMess, totalPages, topic);
                        }
                    });
            } else if (topic == "keyword") {
                APIManager.searchConcert(searchText, topic, `&${topic}=`, j)
                    .then(data => {
                        const totalPages = data.page.totalPages;
                        if ("_embedded" in data) {
                            concertsDOMManager.renderResults(data._embedded.events, totalPages, topic, searchText);
                        } else {
                            concertsDOMManager.renderResults(noGenreMess, totalPages, topic);
                        }
                    });
            }
        });
    },
    welcomeNashvilleEvent() {
        document.getElementById("welcome").addEventListener("click", () => {
            document.getElementById("formSearch").classList.remove("hidden");
        });
    }
};

concertEventManager.welcomeNashvilleEvent()