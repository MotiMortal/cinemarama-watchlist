var watchlistUser = []

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

module.exports = {criarWatchlist}