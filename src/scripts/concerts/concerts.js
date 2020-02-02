import eventManager from "../eventManager.js";
import DOMManager from "../DOMManager.js"

const concertJS = {
    runIt(){
        const topic = "Concert";
        const categories = this.getCategories();
        DOMManager.renderCategoryPop(topic, categories);
        eventManager.popUpEvent(topic, categories);
    },
    getCategories(){
        return ["Genre", "Keyword"];
    }
}
export default concertJS;
