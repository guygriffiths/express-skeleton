import express, { NextFunction, Request, Response } from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({
		message: 'You have reached the root of the subroute!',
	})
})

router.get('/path', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({
		message: 'This is a subpath of the subrouter',
	})
})

export default router
