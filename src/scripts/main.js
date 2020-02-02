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