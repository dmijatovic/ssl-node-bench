import {Request,Response,NextFunction} from 'express'

export function logInfo(message="", service="click-link-api"){
  const log=`[INFO] ${Date.now()} ${service} ${message}\n`
  process.stdout.write(log)
}

export function logError(message="", service="click-link-api"){
  const err=`[ERROR] ${Date.now()} ${service} ${message}\n`
  process.stderr.write(err)
}

export function loggerMiddleware(req:Request, res:Response, next:NextFunction){
  logInfo(`${req.method} ${req.url}`)
  return next()
}

export default loggerMiddleware