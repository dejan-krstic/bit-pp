const UIModule = (() => {

    const UISelectors = {
        dropDown: '.dropdown-menu',
        cardGroup: '.row',
        card: '.card',
        dropResult: '.drop-result',
        checkSearch: '#menu1',
        navbar : '.navbar',
        akas : '.akas',
        seasons : '.seasons',
        cast : '.cast',
        crew : '.crew',
        ep1 : '.ep1',
        ep2 : '.ep2',
        ep3 : '.ep3'
    }

    const status = {
        ERROR: 'Please refresh yuor page!'
    }
    
    const createCard = (name, image, id) => $(`
        <a class="col-lg-4 col-md-6" href="./single.html?id=${id}">
             <div class="card">
                <img class="card-img-top" src="${image}" alt="Card image cap">
            <div class="card-body">
            <p class="card-text">${name}</p>
            </div>
          </div>
        </a> `)

    const createMainEverything = (shows) => {
        const page = $(UISelectors.cardGroup);
        shows.forEach(show => {
            let card = createCard(show.name, show.image, show.id);
            page.append(card);
        });
    }

    const createDropDown = (shows) => {
        const ulDropDown = $(UISelectors.dropDown);
        ulDropDown.css('display', 'none');
        console.log(shows);
        if (!shows.length){
                return;
        }
         ulDropDown.empty();
        
        console.log(ulDropDown);
        shows.forEach( show => {
            
            let li = ( 
            $(`<li role="presentation">
                           <a role="menuitem" tabindex="-1" href="./single.html?id=${show.id}">${show.name}</a>
                        </li>`));
            ulDropDown.append(li);
            
        });
        ulDropDown.css('display', 'block');

    }
    
    const createFrame = (obj) => {
        let main = ($(`
        <div class="row">
        <div class="col-md col-lg-7">
            <img id="big" src="${obj.image}" alt="">
        </div>
        <div class="col-md col-lg-5">
            <h1> ${obj.name} </h1>
            <div class="akas"></div>
            <h4>Seasons (${obj.seasons.length}):</h4>
            <div class="seasons"></div>
            <h4>Cast:</h4>
            <div class="cast"></div>
            <h4>Crew:</h4>
            <div class="crew"></div>

        </div>
        <div class="col-12">
            <h3>Summary</h3>
            <p>${obj.info}</p>
        </div>
        <div class="col-12">
            <h3>Episodes:</h3>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="ep1">
 
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="ep2">

            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="ep3">

            </div>
        </div>

        </div>

        `))

        return main;      
    }

    const ulDone = (arr) => {
        const ul = $('<ul></ul>');  
        arr.forEach(e =>{
            ul.append(`<li>${e.getInfo()}</li>`)
        })
        return ul;
    }

    const createSingleShowPage = (obj) => {
        const navbar = $(UISelectors.navbar);
        navbar.after(createFrame(obj));
        const akas = $(UISelectors.akas);
        akas.append(ulDone(obj.akas));
        const seasons = $(UISelectors.seasons);
        seasons.append(ulDone(obj.seasons));
        const cast = $(UISelectors.cast);
        cast.append(ulDone(obj.cast));
        const crew = $(UISelectors.crew);
        crew.append(ulDone(obj.crew));
        let arr1 = obj.episodes.slice(0, Math.floor(obj.episodes.length/3));
        const ep1 = $(UISelectors.ep1);
        ep1.append(ulDone(arr1))
        let arr2 = obj.episodes.slice(Math.floor(obj.episodes.length/3), Math.floor(2*obj.episodes.length/3));
        const ep2 = $(UISelectors.ep2);
        ep2.append(ulDone(arr2))
        let arr3 = obj.episodes.slice(Math.floor(2*obj.episodes.length/3));
        const ep3 = $(UISelectors.ep3);
        ep3.append(ulDone(arr3));
    }


    return {
        UISelectors,
        createMainEverything,
        createDropDown,
        createSingleShowPage
    };

})();