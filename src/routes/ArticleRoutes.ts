import { ArticleRequest } from './../interfaces/RequestInterfaces';
import { Article } from './../models/ArticleModel';
import { Router, Response, NextFunction } from "express";

const router: Router = Router()


router.param('article', async (req: ArticleRequest, res: Response, next, slug) => {
    console.log('======================')
    try {
        const article = await Article.findOne({ slug })
        req.article = article
        return next()
    } catch(err) {
        console.log(err)
        req.article = null
        next()
    }
})

router.get('/', async (req, res, next) => {
    const articles = await Article.find()
    res.status(200).json({ response: true, articles })
})

router.get('/:article', async (req: ArticleRequest, res: Response, next: NextFunction) => {
    res.status(200).json({response: true, article: req.article})
})

export const ArticleRoutes = router