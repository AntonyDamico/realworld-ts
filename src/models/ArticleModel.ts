import { Document, Schema, Model, model } from "mongoose";
import slug from "slug";

export interface IArticleModel extends Document {
    slug: string,
    title: string,
    description?: string,
    body: string,
    favoritesCount: number,
    favorited: boolean,
    toJSON()
    slugify()
}

const ArticleSchema = new Schema({
    slug: { type: String, lowercase: true, unique: true },
    title: String,
    description: String,
    body: String,
    favoritesCount: { type: Number, default: 0 },
    favorited: { type: Boolean, default: false }
}, { timestamps: true })


ArticleSchema.pre('validate', function (next) {
    if (!this.slug) this.slugify()
    next();
});

ArticleSchema.methods.slugify = function () {
    this.slug = slug(this.title) + '-' + Math.floor((Math.random() * Math.pow(36, 6))).toString(36)
}

ArticleSchema.methods.toJSON = function () {
    return {
        slug: this.slug,
        title: this.title,
        description: this.description,
        body: this.body,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
        favorited: this.favorited,
        favoritesCount: this.favoritesCount
    }
}

export const Article: Model<IArticleModel> = model<IArticleModel>('Article', ArticleSchema)