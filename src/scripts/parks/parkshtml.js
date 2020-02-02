const parksHTML = document.getElementById("search-parks");

const parksOptionsArray = [
    ["community_center", "Community Center"],
    ["nature_center", "Nature Center"],
    ["playground", "Playground"],
    ["ada_accessible", "ADA Accessibility"],
    ["restrooms_available", "Restrooms"],
    ["picnic_shelters", "Picnic Shelters"],
    ["dog_park", "Dog Park"],
    ["baseball_fields", "Baseball Fields"],
    ["basketball_courts", "Basketball Courts"],
    ["volleyball", "Volleyball"],
    ["soccer_fields", "Soccer Fields"],
    ["football_multi_purpose_fields", "Football or Multi-Purpose Fields"],
    ["tennis_courts", "Tennis Courts"],
    ["disc_golf", "Disc Golf"],
    ["skate_park", "Skate Park"],
    ["swimming_pool", "Swimming Pool"],
    ["spray_park", "Spray Park"],
    ["golf_course", "Golf Course"],
    ["walk_jog_paths", "Walking or Jogging Paths"],
    ["hiking_trails", "Hiking Trails"],
    ["horse_trails", "Horse Trails"],
    ["mountain_bike_trails", "Mountain Bike Trails"],
    ["boat_launch", "Boat Launch"],
    ["camping_available_by_permit", "Camping by Permit"],
    ["fishing_by_permit", "Fishing by Permit"],
    ["lake", "Lake"],
    ["canoe_launch", "Canoe Launch"],
    ["community_garden", "Community Garden"],
    ["historic_features", "Historic"]

]

const parksHtmlToDom = () => {
    let parks__HTML = `
    <div id="search__parks">
    <label for="search-parks">Search Parks</label>
    <select name="parkSelector" id="parkSelector">`

    for (const [keyID, valueID] of parksOptionsArray) {
        parks__HTML += `<option value="${keyID}">${valueID}</option>`
    }

    parks__HTML += `
    </select >
    <button id="search-parks-btn">Submit</button>
    </div >
    `
    parksHTML.innerHTML = parks__HTML;
    parks_searchEventManager.addSearchClickEventListener();
}

parksHtmlToDom();


