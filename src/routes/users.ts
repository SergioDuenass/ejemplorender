import { Router }  from 'express';

const router = Router();

/**
 * @swagger
 * /users:
 *  get:
 *   tags: [Users]
 *   description: list of users
 *   responses:
 *    '200':
 *     description: Array of users
 */
router.get('', (req, res) => {
    res.send([]);
});

/**
 * @swagger
 * /users/{id}:
 *  get:
 *   tags: [Users]
 *   description: get one user by ID
 *   parameters: 
 *    - in: path
 *      name: id
 *      required: true
 *   responses:
 *    '200':
 *     description: Array of users
 */
router.get('/:id', (req, res) => {
    res.send({
        id: req.params.id
    });
});

export default router;