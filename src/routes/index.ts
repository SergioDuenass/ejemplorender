import { Router } from 'express';
import userRoutes from './users';
const router = Router();

/**
 * @swagger
 * /:
 *  get:
 *   description: api root endpoint
 *   responses:
 *    '200':
 *     description: A successful response
 */
router.get('', (req, res) => {
    res.send('Hello World');
});

router.use('/users', userRoutes);

export default router;