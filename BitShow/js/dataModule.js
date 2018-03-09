let dataModule = (() => {

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
    }

    class Cast {

        constructor(name) {
            this.name = name;
        }
    }

    let createShows = (limit) => new Shows(limit);
    let createSingleShow = (title, imgURL, showId, details) => new SingleShow(title, imgURL, showId, details);


    return {
        createShows : createShows,
        createSingleShow : createSingleShow
    }
})()