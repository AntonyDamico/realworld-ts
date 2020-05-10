import { model, Schema } from "mongoose";


const CatSchema = new Schema({
    name: String
})

export const Cat = model('Cat', CatSchema)