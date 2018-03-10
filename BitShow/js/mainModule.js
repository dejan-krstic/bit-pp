let mainModule = ((UIModule, dataModule) => {

    let topShows = $.get('http://api.tvmaze.com/shows');

    let data;
    let limit = 50;
    let dropDownLimit = 10;

    topShows.done(() => {
        data = JSON.parse(topShows.responseText);


        let allShows = dataModule.createShows(limit);




        for (let i = 0; i < limit; i++) {
            let show = dataModule.createSingleShow(data[i].name, data[i].image.medium, data[i].id, data[i].summary);
            allShows.addShow(show);

        }

        let cardGroup = $(UIModule.UISelectors.cardGroup);


        allShows.showList.forEach((item, i) => {
            let card = $('<div class="col-4"></div>');
            card.html(`<div class="card" id="i${item.id}"><img class="card-img-top" src="${item.image}" alt="Card image cap" id="i${item.id}"> <div class="card-body" id="i${item.id}"><p class="card-text" id="i${item.id}">${item.title}</p></div></div>`);
            cardGroup.append(card);
        })

        console.log($('.card')[0])


        $('.card').hover(function(event) {
            $('.card').css('cursor', 'pointer');
        });

        $('.card').click(function(event) {
            let id = event.target.id.substring(1);

            localStorage.setItem('seasonsRequest', `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`);
            localStorage.setItem('showObj', `${JSON.stringify(allShows.showList[id - 1])}`);
            console.log(localStorage.showObj);
        });

    });


    // --------------------------------------------------------------

    let searchInterval;
    let checkSearch = $('.dropdown-toggle');
    let ulDropdown = $('.dropdown-menu');
    let marker = '[]';
    let liveSearch = () => {
        let data = [];

        let liveDropdown = $.get(`http://api.tvmaze.com/search/shows?q=${checkSearch.val()}`);

        liveDropdown.done(() => {
            if (liveDropdown.responseText == marker) {
                return;
            }
            marker = liveDropdown.responseText;
            if (marker == '[]') {
                $('.dropdown-menu').css('display', 'none');
            } else {
                $('.dropdown-menu').css('display', 'block');
            }
            console.log(marker == '[]');
            data = JSON.parse(liveDropdown.responseText);
            let dropdownShows = dataModule.createShows(dropDownLimit);

            for (let i = 0; i < data.length && i < dropDownLimit; i++) {
                if (data[i].show.image == null) {
                    var image = 'http://en.docsity.com/wordpress/wp-content/uploads/sites/2/2014/02/programmers-be-like.jpg';
                } else {
                    image = data[i].show.image.medium;
                }

                let show = dataModule.createSingleShow(data[i].show.name, image, data[i].show.id, data[i].show.summary);
                dropdownShows.addShow(show);
            }
            ulDropdown.empty();
            dropdownShows.showList.forEach((item) => {
                let li = $(`<li role="presentation"> <a role="menuitem" tabindex="-1" href="./single.html">${item.title}</a></li>`);
                ulDropdown.append(li);
            })

        })
    }
    checkSearch[0].addEventListener('focus', () => {
        console.log(checkSearch.val());
        searchInterval = setInterval(liveSearch, 1500);

    })


    checkSearch[0].addEventListener('blur', () => {
        clearInterval(searchInterval);
    })


    //--------------------------------------------------------------------------------------------------------------



    let getData = () => {
        return data;
    }

    return {
        getData: getData,
        checkSearch: checkSearch
    }
})(UIModule, dataModule)