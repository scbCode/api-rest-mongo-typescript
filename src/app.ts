import express from 'express'
import { router } from './routes';

const app = express()
console.log("app")

app.use(express.json());
app.use(router);
console.log("app router")
app.use((req,res,next)=>{
   console.log("mid")
   next()
})
app.use((err,req,res,next)=>{
   console.log("err Time:",new Date())
   next(err)
})

export {app}