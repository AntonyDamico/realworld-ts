import { Database } from './core/database';
import express, { Request, Application, Response } from "express";
import dotenv from "dotenv";

dotenv.config()
const port = parseInt(process.env.SERVER_PORT, 10)
const mongoUri: string = process.env.MONGO_URI

const app: Application = express()
Database.connect(mongoUri)


app.get('/', (req: Request, res: Response) => {

    res.status(200).json({ response: true })

})

app.listen(port, () => {
    console.log(`Starting on port ${port}`)
})
