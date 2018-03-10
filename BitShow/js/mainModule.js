let mainModule = ((UIModule, dataModule) => {
    
    const initShows = () => {
        $.get('http://api.tvmaze.com/shows')
        .done(onSuccessHandler)
        .fail(onErrorHandler);
    }
    

    const onSuccessHandler = (response) => {
        topShows(response)
    }

    const onErrorHandler = (error) => {
        // UIModule.showError(error)
    }

    const initSingle = () => {
        $.get(`http://api.tvmaze.com/shows/${localStorage.showID}?embed[]=seasons&embed[]=cast`)
        .done(onSuccessSingleHandler)
        .fail(onErrorSingleHandler)
    }

    const onSuccessSingleHandler = (response) => {
        singleShow(response);
    }

    const onErrorSingleHandler = (error) => {
        // UIModule.showError(error)
    }

    const topShows = (response) => {

        const shows = dataModule.adaptResponse(response, 50)
        let allShows = UIModule.displayShows(shows);
        $(UIModule.UISelectors.card).hover(UIModule.toPointer);
        $(UIModule.UISelectors.card).click(dataModule.clicked);
        

    };

    const singleShow = (response) => {
        const show = dataModule.adaptSingleResponse(response);
        let singleShow = UIModule.displaySingleInfo(show);
    }


    // --------------------------------------------------------------

    const liveSearch = () => {
        let checkSearch = $(UIModule.UISelectors.checkSearch);
        console.log(checkSearch);
        $.get(`http://api.tvmaze.com/search/shows?q=${checkSearch.val()}`)
        .done(onSuccessSearchHandler)
        .fail(onErrorSearchHandler);
    }

    const onSuccessSearchHandler = (response) => {

        const results = dataModule.adaptResponse(response, 10);
        let resultList = UIModule.displayDropDown(results);
        $(UIModule.UISelectors.dropResult).hover(UIModule.toPointer);
        $(UIModule.UISelectors.dropResult).click(dataModule.clicked);
    }

    const onErrorSearchHandler = (error) => {
        //UIModule.showError(error)
    }

    $(UIModule.UISelectors.checkSearch).on('focus',() => {
        console.log('1');
        dataModule.interval.set(liveSearch)
    })


    $(UIModule.UISelectors.checkSearch).on('blur', dataModule.interval.clear)


    //--------------------------------------------------------------------------------------------------------------



    let getData = () => {
        return data;
    }

    return {
        initShows,
        initSingle
        
    }
})(UIModule, dataModule)