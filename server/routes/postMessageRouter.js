import { Router } from 'express';

import { auth } from '../middlewares/verifyToken.js';
import { getPosts } from '../controllers/postMessageControllers.js';

const router = Router();

router.get('/getposts',auth, getPosts);

export default router;