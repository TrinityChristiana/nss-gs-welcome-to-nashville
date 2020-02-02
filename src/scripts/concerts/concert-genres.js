import APIManager from "./concert-apiManager.js";

const getGenreInformation = {
    getGenreId(genre, genresObj) {
        const searchText = genre;
        let genreId;
        genresObj.forEach(element => {
            if (element.name == searchText) {
                genreId = element.id;
            }
        });
        return genreId;
    },
    getGenreList() {
        return APIManager.fetchConcertGenreList()
            .then(data => {
                let genreObj = [];
                data._embedded.genres.forEach(element => {
                    genreObj.push({
                        name: element.name,
                        id: element.id
                    });
                });
                return genreObj;
                // makeOptions.makeConcertOptions(genreObj);
            });

    },

};
export default getGenreInformation;

