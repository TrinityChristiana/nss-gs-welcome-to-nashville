const DOMManager = {
    toggleItenreary() {
        document.getElementById("search").classList.add("hidden");
        document.getElementById("search-results").classList.add("hidden");
        document.getElementById("itinerary").classList.add("hidden");
        document.getElementById("search-result-title").classList.add("hidden");
        document.getElementById("itinerary-title").classList.add("hidden");
        const myEle = document.getElementById("searching-for");
        if (myEle) {
            document.getElementById("searching-for").classList.add("hidden");
        }

        const myElet = document.getElementById("pagination");
        if (myElet) {
            document.getElementById("searching-for").classList.add("hidden");
        }



        const allIten = document.getElementById("all-itineraries");

        apiManager.getItenerary()
            .then(data => {
                let allIteHTML = "";

                for (const prop in data) {
                    allIteHTML += `
                    <section id="itinerary-${data[prop].id}">
                        <div id="park__itin">Park:${data[prop].park}</div>
                        <div id="concert__itin">Concert:${data[prop].concert}</div>
                        <div id="restaurant__itin">Restaurant:${data[prop].restaurant}</div>
                        <div id="arts__itin">Arts: ${data[prop].arts}</div>
                    </section>
                    `
                }
                allIten.innerHTML = allIteHTML;
            });

    },
    untoggleItenreary() {
        document.getElementById("search").classList.remove("hidden");
        document.getElementById("search-results").classList.remove("hidden");
        document.getElementById("itinerary").classList.remove("hidden");
        document.getElementById("search-result-title").classList.remove("hidden");
        document.getElementById("itinerary-title").classList.remove("hidden");

        const myEle = document.getElementById("searching-for");
        if (myEle) {
            document.getElementById("search-header").classList.remove("hidden");
        }

        const myElet = document.getElementById("pagination");
        if (myElet) {
            document.getElementById("pagination").classList.remove("hidden");
        }

        const allIten = document.getElementById("all-itineraries");
        allIten.innerHTML = "";

    },
    renderItinerary(name, category) {
        const concertItinContainer = document.getElementById(`${category}__itin`);
        concertItinContainer.innerHTML = `${category}: ${name}`;
    },
    renderCategoryPop(topic, categories) {
        const lowerTopic = topic.toLowerCase();
        const popUpSection = document.getElementById(`${lowerTopic}-category`);
        let categoryHTML = "";

        categories.forEach(element => {
            categoryHTML +=
                `<a class="item" id="search-${lowerTopic}-${element.toLowerCase()}">${element}</a>`;
        });
        popUpSection.innerHTML = categoryHTML;
    },
    getSearchInputHTML(topic, category) {
        const noDrop = ["concert-keyword"];
        const lowTopic = topic.toLowerCase();
        const lowCategory = category.toLowerCase();
        document.getElementById("menu-title").innerText = `${topic}`;
        if (noDrop.includes(`${topic.toLowerCase()}-${category.toLowerCase()}`)) {
            return `
                        <input class="prompt" id="search-input" type="text" placeholder="${category}">
                        <i class="search link icon" id="search-icon"></i>
            `
        } else {
            return `
            <input class="prompt" id="search-input" type="text" list="${lowTopic}-${lowCategory}-options" placeholder="${category}">
            <i class="search link icon" id="search-icon"></i>
            <datalist id="${lowTopic}-${lowCategory}-options"></datalist>
                    `
        }
        
    },
    makeOptions(topic, category, options){
        const lowTopic = topic.toLowerCase();
        const lowCategory = category.toLowerCase();
        const dataList = document.getElementById(`${lowTopic}-${lowCategory}-options`);
        
        if(dataList !== null){
            dataList.innerHTML = "";
            console.log(options);
            options.forEach(option => {
                dataList.innerHTML += `<option value="${option.name}">`;
            });
        }


    }
}

export default DOMManager;