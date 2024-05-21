import { Router, Request, Response } from 'express';

export const routes = Router()

/**
 * default route
 * @route GET /
 */
routes.get('/', (req: Request, res: Response) => {
  res.status(200).send('Welcome!')
})