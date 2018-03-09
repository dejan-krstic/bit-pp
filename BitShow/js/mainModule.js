let mainModule = ((UIModule, dataModule) => {

    let topShows = $.get('http://api.tvmaze.com/shows');

    let data;
    let limit = 50;

    topShows.done(() => {
        data = JSON.parse(topShows.responseText);


        let allShows = dataModule.createShows(limit);
        $('.dropdown-toggle')[0].addEventListener('click', (e) => {
            $('.dropdown-menu').css('display', 'block');
        })



        for (let i = 0; i < limit; i++) {
            let show = dataModule.createSingleShow(data[i].name, data[i].image.medium, data[i].id, data[i].summary);
            allShows.addShow(show);

        }

        let cardGroup = $(UIModule.UISelectors.cardGroup);


        allShows.showList.forEach((item, i) => {
            let card = $('<div class="col-4"></div>');
            card.html(`<div class="card"><img class="card-img-top" src="${item.image}" alt="Card image cap"> <div class="card-body"><p class="card-text"><a href="./single/single.html">${item.title}</a></p></div></div>`);
            cardGroup.append(card);
        })

    });


// --------------------------------------------------------------

    let searchInterval;
    let checkSearch = $('.dropdown-toggle');
    let ulDropdown = $('.dropdown-menu');
    let marker = '';
    let liveSearch = () => {
        let data = [];
        
        let liveDropdown = $.get(`http://api.tvmaze.com/search/shows?q=${checkSearch.val()}`);  
        
        liveDropdown.done(() => {
            if (liveDropdown.responseText == marker) {
                return;
            }
            marker = liveDropdown.responseText;
            console.log(1);
            data = JSON.parse(liveDropdown.responseText);
            let dropdownShows = dataModule.createShows(10);

            for (let i = 0; i < data.length && i<10; i++) {
                if (data[i].show.image == null) {
                    var image = 'http://en.docsity.com/wordpress/wp-content/uploads/sites/2/2014/02/programmers-be-like.jpg';
                } else {
                    image = data[i].show.image.medium;
                }
                
                let show = dataModule.createSingleShow(data[i].show.name , image, data[i].show.id, data[i].show.summary);
                dropdownShows.addShow(show);
            }
            ulDropdown.empty();
            dropdownShows.showList.forEach((item) => {
                let li = $(`<li role="presentation"> <a role="menuitem" tabindex="-1" href="./single/single.html">${item.title}</a></li>`);
                ulDropdown.append(li);
            })
         
        })    
    }
    checkSearch[0].addEventListener('focus', () => {
        console.log(checkSearch.val());
        searchInterval = setInterval(liveSearch, 1000);
        
        // let startSearch = () => {
        //     if (checkSearch.val()) {
        //         liveSearch();
        //     } else {
        //         clearInterval(searchInterval);
        //     }    
        // }
        // searchInterval = setInterval(startSearch, 1000);
        
        
        // if (checkSearch.val()) {
        //     searchInterval = setInterval(liveSearch, 1000);
            
        // } else {
        //     clearInterval(searchInterval);
        // }

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