import eventManager from "../eventManager.js";
import DOMManager from "../DOMManager.js";
import getGenreInformation from "../concerts/concert-genres.js"
import apiKeyCheck from "../apiKeyCheck.js"

const concertJS = {
    runIt(concertKey) {
        const topic = "Concert";
        const categories = this.getCategories();
        DOMManager.renderCategoryPop(topic, categories);
        // console.log(apiKeyCheck.runIt(topic, categories));
        getGenreInformation.getGenreList(concertKey)
            .then(optionsObj => {
                eventManager.popUpEvent(topic, categories, optionsObj, concertKey);
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