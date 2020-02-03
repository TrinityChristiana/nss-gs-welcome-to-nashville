

const APIManager = {
    fetchConcertGenreList(concertKey) {
        return fetch(`https://app.ticketmaster.com/discovery/v2/classifications/segments/KZFzniwnSyZfZ7v7nJ.json?id=KnvZfZ7vAv6&apikey=${concertKey}`)
            .then(results => results.json())
            .catch((error) => alert("genresObjPromise " + error));
    }
};

export default APIManager;