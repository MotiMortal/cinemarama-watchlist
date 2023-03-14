const express = require("express")
const app = express()
const port = 3000
const routerWatchlist = require ("./routers/watchlistRouter")

app.use (express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use ('/watchlist', routerWatchlist)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

