const next = require('next')
const routes = require('./routes')
const { createServer } = require('http')

const { PORT = 3000, NODE_ENV } = process.env

const app = next({
  dev: NODE_ENV !== 'production',
})

const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer(handler).listen(PORT, err => {
    if (err) throw err
    console.log(`Ready on port ${PORT}`)
  })
})
