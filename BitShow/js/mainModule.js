let mainModule = ((UIModule, dataModule) => {

    let topShows = $.get('http://api.tvmaze.com/shows');

    let data;
    let limit = 50;

    topShows.done(() => {
        data = JSON.parse(topShows.responseText);
        console.log(data);

        let allShows = dataModule.createShows(limit);
        $('.dropdown-toggle')[0].addEventListener('click', (e) => {
            $('.dropdown-menu').css('display', 'block');
        })



        for (let i = 0; i < limit; i++) {
            let show = dataModule.createSingleShow(data[i].name, data[i].image.medium, data[i].id, data[i].summary);
            allShows.addShow(show);

        }

        let cardGroup = $(UIModule.UISelectors.cardGroup);
        console.log(cardGroup);

        allShows.showList.forEach((item, i) => {
            let card = $('<div class="col-4"></div>');
            card.html(`<div class="card"><img class="card-img-top" src="${item.image}" alt="Card image cap"> <div class="card-body"><p class="card-text"><a href="./single/single.html">${item.title}</a></p></div></div>`);
            cardGroup.append(card);
        })

    });
    let searchInterval;
    let liveSearch = () => {
    }
    let checkSearch = $('.dropdown-toggle');
    checkSearch.addEventListener('focus', () => {
        if (checkSearch.value) {

            searchInterval = setInterval(liveSearch, 1000);
        } else {
            clearInterval(searchInterval);
        }

    })

    checkSearch.addEventListener('blur', () => {
        clearInterval(searchInterval);
    }

    

    

    let getData = () => {
        return data;
    }

    return {
        getData: getData
    }
})(UIModule, dataModule)