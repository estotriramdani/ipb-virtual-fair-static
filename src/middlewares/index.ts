import { NextFunction, Request, Response } from 'express';

export const headersMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.headers['X-IVF-API']);
  if (
    !req.headers['X-IVF-API'] ||
    req.headers['X-IVF-API'] !== process.env.X_AUTH_TOKEN
  ) {
    res.status(401).json({
      status: 'failed',
      message: 'Unauthorized',
      data: null,
    });
  } else {
    next();
  }
};
