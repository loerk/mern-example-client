import { Router } from 'express';

// importing the controllers
import { signup } from '../controllers/userControllers.js';

const router = Router();

// define the routes

//signup
router.post('/signup', signup);

export default router;