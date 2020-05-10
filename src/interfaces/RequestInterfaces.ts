import { IArticleModel } from './../models/ArticleModel';
import { Request } from 'express';

export interface ArticleRequest extends Request {
    article: IArticleModel
}