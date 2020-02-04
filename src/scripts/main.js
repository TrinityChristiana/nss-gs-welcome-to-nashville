import eventManager from './eventManager.js';
import concertJS from "./concerts/concerts.js";
import artsJS from "./arts/arts.js";
import parksJS from './parks/parks.js';
import restaurantJS from './restaurants/restaurants.js';
import apiKeyCheck from "./apiKeyCheck.js";
// import holdKeys from "../../api/apiKeys.js";
import restApiManager from "./restaurants/restaurantsAPIManager.js";

console.log({process.env.concertKey});
// let concertKey = holdKeys.concertKey();
let  restaurantKey = holdKeys.restaurantKey();
// concertJS.runIt();
eventManager.runIt();
artsJS.runIt();
parksJS.runIt();
restaurantJS.runIt();
// apiKeyCheck.runIt();
concertJS.runIt(concertKey);
restApiManager.fetchData(restaurantKey);

// $('.ui.basic.modal').modal('show');

$('.menu .browse')
    .popup({
        inline: true,
        hoverable: true,
        on: "click",
        position: 'bottom right',
        delay: {
            show: 300,
            hide: 800
        }
    });


$('.ui.dropdown')
    .dropdown({
        allowCategorySelection: true
    });

// const myFunction = (x) => {
//     console.log(x);
//     document.getElementById("search-results").innerText = `${x} is your screen size`;
//     if (x.matches) { // If media query matches
//         document.getElementById("desktop").style = "display: none";
//         document.getElementById("mobile").style = "display: block";
//     } else {
//         document.getElementById("mobile").style = "display: none";
//         document.getElementById("desktop").style = "display: block";
        
//     }
// }

// var x = window.matchMedia("(max-width: 775px)");
// myFunction(x); // Call listener function at run time


// x.addListener(myFunction); // Attach listener function on state changes
