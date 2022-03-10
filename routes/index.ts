import express, { NextFunction, Request, Response } from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({
		message: 'Welcome to the Vite Node API!',
	})
})

router.get('/path', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({
		message: 'This is a subpath on the index router',
	})
})

export default router
