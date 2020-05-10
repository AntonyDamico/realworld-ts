import { ArticleRoutes } from './ArticleRoutes';
import { Router } from "express";

const router: Router = Router()

router.use('/articles', ArticleRoutes)

export const mainRouter = router