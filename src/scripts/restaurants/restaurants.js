import eventManager from "../eventManager.js";
import DOMManager from "../DOMManager.js"

const restaurantJS = {
    runIt(){
        const topic = "Restaurant";
        const categories = this.getCategories();
        DOMManager.renderCategoryPop(topic, categories);
        eventManager.popUpEvent(topic, categories);
    },
    getCategories(){
        return ["Cuisine"];
    }
}
export default restaurantJS;