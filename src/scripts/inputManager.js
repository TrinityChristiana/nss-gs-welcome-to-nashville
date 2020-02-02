import getGenreInformation from './concerts/concert-genres.js';

const inputManager = {
    runIt(options) {
        const topic = this.getSearchTopic().toLowerCase();
        const category = this.getSearchCategory().toLowerCase();
        const input = this.getSearchInput();
        let id = null;
        
        if(category == "genre"){
           id = getGenreInformation.getGenreId(input, options);
        }
        return {
            topic: topic,
            category: category,
            input: input,
            id: id
        };
    },
    getSearchInput() {
        return document.getElementById("search-input").value;

    },
    getSearchTopic() {
        return document.getElementById("menu-title").innerText;
    },
    getSearchCategory() {
        return document.getElementById("search-input").placeholder;
    },
    getId(){

    }

}

export default inputManager;