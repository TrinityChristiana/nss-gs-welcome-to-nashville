import eventManager from './eventManager.js';
import concertJS from "./concerts/concerts.js";
import artsJS from "./arts/arts.js";
import parksJS from './parks/parks.js';
import restaurantJS from './restaurants/restaurants.js'


concertJS.runIt();
eventManager.runIt();
artsJS.runIt();
parksJS.runIt();
restaurantJS.runIt();


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

const myFunction = (x) => {
    if (x.matches) { // If media query matches
        document.getElementById("desktop").style = "display: none";
        document.getElementById("mobile").style = "display: block";
    } else {
        document.getElementById("mobile").style = "display: none";
        document.getElementById("desktop").style = "display: block";

    }
}

var x = window.matchMedia("(max-width: 775px)")
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
