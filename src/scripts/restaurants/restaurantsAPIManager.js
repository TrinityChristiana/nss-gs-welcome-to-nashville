const restApiManager = {
  fetchData(restaurantKey) {
    const cuisinesURL = `https://developers.zomato.com/api/v2.1/cuisines?city_id=1138&apikey=${restaurantKey}`;

    fetch(cuisinesURL)
      .then(response => response.json())
      .then(cuisines => {
        let select = document.createElement("select");
        select.id = "cuisineSelect";
        let options = "";
        cuisines.cuisines.forEach(({
          cuisine
        }) => {
          options +=
            '<option value="' +
            cuisine.cuisine_id +
            '">' +
            cuisine.cuisine_name +
            "</option>";
        });
        select.innerHTML = options;
        const restaurantSearch = document.getElementById("search-restaurants");
        const restaurantSearchBtn = document.getElementById(
          "search-restaurants-btn"
        );
        restaurantSearch.insertBefore(select, restaurantSearchBtn);
      });

    /* let loader = `<div class="boxLoading">Loading Searches...</div>`;
    document.getElementById("search-results").innerHTML = loader; */

    document
      .getElementById("search-restaurants-btn")
      .addEventListener("click", () => {
        const cuisine = document.getElementById("cuisineSelect").value;
        const URL = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&cuisines=${cuisine}&entity_type=city&apikey=${restaurantKey}`;
        let loader = `<div class="boxLoading">Loading Searches...</div>`;
        document.getElementById("search-results").innerHTML = "";
        fetch(URL)
          .then(response => response.json())
          .then(restaurants => {
            const restaurantList = restaurants.restaurants;
            //console.log(restaurantList);  // drilled down inside object to get the array of restaurant objects.
            const restaurantData = restaurantList.map(({
              restaurant
            }) => {
              // iterating over restaurantList, returning object of data we want.
              return {
                name: restaurant.name,
                cuisines: restaurant.cuisines,
                address: restaurant.location.address
              };
            });
            renderComponents(restaurantData);

            const restaurantSearchInput = document.getElementById(
              "search-restaurants"
            );
            restaurantSearchInput.value = "";
            // clears search box after we render the results aka the restaurant component
          });
      });
    //.catch(err => {
    // instead of calling renderComponents write a message something like
    // const searchResultsContainer = document.getElementById("search-results");
    // searchResultsContainer.innerHTML = "No Restaurants Found";
  }
}

export default restApiManager;