import eventManager from "../eventManager.js";
import DOMManager from "../DOMManager.js";
import getGenreInformation from "../concerts/concert-genres.js"

const concertJS = {
    runIt() {
        const topic = "Concert";
        const categories = this.getCategories();
        DOMManager.renderCategoryPop(topic, categories);
        getGenreInformation.getGenreList()
            .then(optionsObj => {
                eventManager.popUpEvent(topic, categories, optionsObj);
            });

    },
    getCategories() {
        return ["Genre", "Keyword"];
    },
    makeOptions(optionsObj) {
        return optionsObj;
    }
}
export default concertJS;