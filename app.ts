import express from 'express'
import indexRouter from './routes/index'
import subRouter from './routes/subroute'

const app = express()
const port = 3003

// Automatically recognise incoming Request object as JSON
app.use(express.json())

app.use('/', indexRouter)
app.use('/subroute', subRouter)

if (process.env.NODE_ENV === 'production') {
	app.listen(port, () => {
		console.log(`App listening on port ${port}!`)
	})
}

export const viteNodeApp = app
