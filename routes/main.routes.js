//management routes
const index = require('./index.routes')

const router = (app) => {
    app.use('/', index)
}

module.exports = router