import eventManager from "../eventManager.js";
import DOMManager from "../DOMManager.js"

const artsJS = {
    runIt(){
        const topic = "Art";
        const categories = this.getCategories();
        DOMManager.renderCategoryPop(topic, categories);
        eventManager.popUpEvent(topic, categories);
    },
    getCategories(){
        return ["Location"];
    }
}
export default artsJS;