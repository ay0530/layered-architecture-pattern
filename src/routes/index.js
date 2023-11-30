import express from 'express';
import PostsRouter from './posts.router.js';

const router = express.Router();

router.use('/', PostsRouter);

export default router;
