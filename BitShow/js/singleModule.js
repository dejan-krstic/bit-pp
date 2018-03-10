let singleModule = ((UIModule, dataModule, mainModule) => {

    console.log('success!')

    let container = $('.container-fluid')[0];

    let seasonReq = $.get(`${localStorage.seasonsRequest}`);
    let showObject = JSON.parse(localStorages.showObj);
    let sample = dataModule.createSingleShow('a', 'a', 'a');

    let data;

    seasonReq.done(() => {
        data = JSON.parse(season.responseText);
        sample.addSeason.call(data, )



    })

})(UIModule, dataModule, mainModule);