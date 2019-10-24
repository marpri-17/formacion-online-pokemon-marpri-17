const getDetailsFromServer = (resumePoke) => {
    debugger
    return Promise.all(resumePoke.map(poke => fetch(poke.url)
        .then(Response => Response.json())))
    // .then(resp => resp.json())
}

export default getDetailsFromServer;