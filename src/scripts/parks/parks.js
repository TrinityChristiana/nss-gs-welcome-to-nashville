import eventManager from "../eventManager.js";
import DOMManager from "../DOMManager.js"

const parksJS = {
    runIt(){
        const topic = "Park";
        const categories = this.getCategories();
        DOMManager.renderCategoryPop(topic, categories);
        eventManager.popUpEvent(topic, categories);
    },
    getCategories(){
        return ["Amenities"];
    }
}
export default parksJS;