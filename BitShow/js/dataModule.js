const dataModule = (() => {

    class Shows {
        
        constructor(limit) {
            this.showList = [];
            this.limit = limit;
        }

        addShow(show) {
            this.showList.push(show);
        }
    }

    class SingleShow {

        constructor(title, imgURL, showId, details) {
            this.title = title;
            this.image = imgURL;
            this.id = showId;
            this.seasons = [];
            this.cast = [];
            this.details = details;
        }

        addSeason(season) {
            this.seasons.push(season);
        }

        addCast(cast) {
            this.cast.push(cast);
        }
    }

    class Season {

        constructor(startDate, endDate) {
            this.start = startDate;
            this.end = endDate;
        }

        getInfo() {
            return `${this.start} - ${this.end}`;
        }
    }

    class Cast {

        constructor(name) {
            this.name = name;
        }

        getInfo() {
            return this.name;
        }
    }

    const createShows = (limit) => new Shows(limit);
    
    const createSingleShow = (title, imgURL, showId, details) => new SingleShow(title, imgURL, showId, details);
    
    const createSeason = (startDate, endDate) => new Season(startDate, endDate);
    
    const createCast = (name) => new Cast(name);

    const adaptResponse = (show, size) => {
        let allShows = createShows(size);
        show.splice(size);
        show.forEach(show => {
            allShows.showList.push(createSingleShow(show.name, show.image.medium, show.id, show.summary))
        });

        return allShows;
    }

    const adaptSingleResponse = (response) => {
        let show = createSingleShow(response.name, response.image.medium, response.id, response.summary);
        
        response._embedded.seasons.forEach(season => {
            show.addSeason(createSeason(season.premiereDate, season.endDate))
        })
        
        response._embedded.cast.forEach(cast => {
            show.addCast(createCast(cast.person.name));
        })
    }

    const clicked = (event) => {
        let id = event.target.id.substring(1);

        localStorage.setItem('showID', `${id}`);
        // localStorage.setItem('showObj', `${JSON.stringify(shows.showList[id - 1])}`);
        location.href = './single.html'
        // console.log(localStorage.showObj);
    };

    let interval = {
        marker : '',
        set : (liveSearch) => {
            this.marker = setInterval(liveSearch, 1500);
        },
        clear : () => {
            clearInterval(this.marker);
        }
    }

    const liveSearch = (params) => {
        for (let i = 0; i < data.length && i < dropDownLimit; i++) {
            if (data[i].show.image == null) {
                var image = 'http://en.docsity.com/wordpress/wp-content/uploads/sites/2/2014/02/programmers-be-like.jpg';
            } else {
                image = data[i].show.image.medium;
            }

            let show = dataModule.createSingleShow(data[i].show.name, image, data[i].show.id, data[i].show.summary);
            dropdownShows.addShow(show);
        }
    }

    return {
        adaptResponse,
        adaptSingleResponse,
        interval
    }
})()