import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdateById';

const router = Router();

router.post('/', userRegister); // POST localhost:5000/user/
router.get('/', userGetAll); // GET localhost:5000/user/
router.get('/:userId/:age', userGetById); // http://localhost:5000/user/6081c18d69e8f08654348f4a
router.patch('/:userId', userUpdateById); // http://localhost:5000/user/6081c18d69e8f08654348f4a

export default router;
