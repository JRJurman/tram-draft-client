const Tram = require('tram-one')
require("babel-polyfill")

const app = new Tram()
app.addRoute('/', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))
app.addRoute('/no-js', require('./pages/no-js'))
app.addActions({
  socket: require('./actions/socket'),
  draft: require('./actions/draft')
})
app.start('.main')

app.engine.actions.fetchDraft()
app.engine.actions.join()
