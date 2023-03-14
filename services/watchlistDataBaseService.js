var watchlistUser = []

function validarUsuario (user){
    for (i = 0; i < watchlistUser.length; i++){
        if(user = watchlistUser){
            console.log('Este usuário já tem uma watchlist')//encerra a watchlist
        }
    }
}

function criarWatchlist (user){
    const watchlist = {
        username: user,
        filmes: [],
        data: Date.now(),
    }
    watchlistUser.push (watchlist)
    // if watchlistUser = user 
    //     console.log("Esse usuário já criou uma watchlist")
}

module.exports = {criarWatchlist, validarUsuario}