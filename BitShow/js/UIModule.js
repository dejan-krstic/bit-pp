const UIModule = (() => {

    const UISelectors = {
        dropDown : ".dropdown-menu",
        cardGroup : ".row",
        card : ".card",
        dropResult : '.drop-result',
        checkSearch : 'dropdown-toggle'
    }
    
    const toggleDropDown = (node, display) => {
        if (display) {
            $(node).show();
        } else {
            $(node).hide();
        }
    }

    const toPointer = (event) => {
        $(event.target).css('cursor', 'pointer');
    }

    const displayShows = shows => {
        
        let cardGroup = $(UISelectors.cardGroup);

        shows.showList.forEach(show => {
            let card = $('<div class="col-4"></div>');
            card.html(`
                <div class="card" id="i${show.id}">
                    <img class="card-img-top" src="${show.image}" alt="Card image cap" id="i${show.id}">
                    <div class="card-body" id="i${show.id}">
                        <p class="card-text" id="i${show.id}">${show.title}</p>
                    </div>
                </div>
            `);
            cardGroup.append(card);
        })
        
        console.log($('.card')[0])

    }
    



    const displaySingleInfo = (obj) => {

        let wrapper = $('<div class="row"></div>');
        wrapper.append(`<div class="col-7"><img id="big" src="${obj.image}></div>`);
        wrapper.append(`<h3>Seasons (${obj.seasons.length})</h3>`);
        let sUl = $('<ul></ul>');
        obj.seasons.forEach(s => {
            sUl.append(`<li>${s.getInfo()}</li>`)
        });
        wrapper.append(sUl);
        wrapper.append('<h3>Cast</h3>')
        let cUl = $('<ul></ul>');
        obj.cast.forEach(c => {
            cUl.append(`<li>${c.getInfo()}</li>`)
        });
        wrapper.append(cUl);
        wrapper.append(`<h3>Summary</h3>${obj.details}`)

        $('.container-fluid')[0].append(wrapper);

    }

    const displayDropDown = (showList) => {
        let ulDropDown = $(UISelectors.dropDown);
        ulDropDown.empty();
            showList.forEach((show, index) => {
                let li = $(`
                <li id="i${index}" class="drop-result" role="presentation">
                    ${show.title}
                </li>`);
                ulDropDown.append(li);
            })
    }

    

    let liveSearch = () => {
        let marker = '[]';
        let data = [];

        const liveDropdown = () => {/*  $.get(`http://api.tvmaze.com/search/shows?q=${checkSearch.val()}`)
            .done(onSuccessSearchHandler)
            .fail(onErrorSearchHandler); */
    }
        const onSuccessSearchHandler = (response) => {
           if (response == marker) {
                return;
            }
            marker = response;
            if (marker == '[]') {
                toggleDropDown(UISelectors.dropDown, false)
              
            } else {
                toggleDropDown(UISelectors.dropDown, true)
            }
 
            data = liveDropdown.response;
            let dropdownShows = dataModule.createShows(dropDownLimit);


            

        }
    }

    

    return {
        UISelectors,
        displaySingleInfo,
        displayShows,
        displayDropDown,
        
    }
})()