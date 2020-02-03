import getGenreInformation from './concerts/concert-genres.js'
import eventManager from './eventManager.js'
import concertJS from "./concerts/concerts.js";
import restApiManager from "./restaurants/restaurantsAPIManager.js"

const apiKeyCheck = {
    runIt() {
        this.showInput();
        return this.validate();
    },
    showInput() {
        $('.ui.modal')
        .modal({
            onApprove : function() {
                if( $('.ui.form').form('is valid')) {
                    return true;
                } else {
                    return false;
                }
                 //Return false as to not close modal dialog
              } 
        })
        .modal('show');
    },
    getInputValues(){
         const restaurantKey = document.getElementById("restaurantKey").value;
         const concertKey = document.getElementById("concertKey").value;

        concertJS.runIt(concertKey);
        restApiManager.fetchData(restaurantKey);

    },
    validate() {
        // lets only validate username to start

        // lets toggle some validation based on button
        $('.ui.button')
            .on('click', function () {
                $('.ui.form')
                    .form({
                        on: 'blur',
                        fields: {
                            concertKey: {
                                identifier: 'concertKey',
                                rules: [{
                                    type: `empty`,
                                    prompt: `Please enter correct concertkey`
                                }]
                            },
                            restaurantKey: {
                                identifier: 'restaurantKey',
                                rules: [{
                                    type: `empty`,
                                    prompt: `Please enter restaurant key`
                                }]
                            }
                        }
                    });
                    return apiKeyCheck.getInputValues();
            });
    }

}

export default apiKeyCheck;
// export default restaurantKey;