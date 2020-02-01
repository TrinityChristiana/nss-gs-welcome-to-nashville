concertEventManager.runIt();

let i = 0;
eventManager.itinerarySaveEvent();

parksHtmlToDom();

artsHtmlToDomFunction();

// $('.ui.basic.modal').modal('show');

$('.menu .browse')
    .popup({
        // inline: true,
        hoverable: true,
        position: 'bottom right',
        delay: {
            show: 300,
            hide: 800
        }
    });