import { Database } from './core/database';
import express, { Request, Application, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()
const port = parseInt(process.env.SERVER_PORT, 10)
const mongoUri: string = process.env.MONGO_URI

const app: Application = express()
Database.connect(mongoUri)


app.get('/', (req: Request, res: Response) => {

    const Cat = mongoose.model('Cat', { name: String });
    // const kitty = new Cat({ name: 'Zildjian' });
    const kitty = new Cat({ name: 'he' });
    kitty.save().then(() => console.log('meow'));

    // Cat.find((err, cats) => {
    //     if(err) {
    //         res.status(200).json({ response: true , err})
    //         return
    //     }
    //     res.status(200).json({ response: true , cats})
    // })
    res.status(200).json({ response: true , kitty})

})

app.listen(port, () => {
    console.log(`Starting on port ${port}`)
})
