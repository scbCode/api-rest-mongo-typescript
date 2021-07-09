import express from 'express'
import { router } from './routes';

const app = express()

app.use(express.json());
app.use(router);
app.use((req,res,next)=>{
   next()
})
app.use((err,req,res,next)=>{
   console.log("err Time:",new Date())
   next(err)
})

export {app}