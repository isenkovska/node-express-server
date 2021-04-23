import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdateById';
import deleteById from './deleteById';

const router = Router();

router.post('/', userRegister); // POST localhost:5000/user/
router.get('/', userGetAll); // GET localhost:5000/user/
router.get('/:userId', userGetById); //GET http://localhost:5000/user/6081c18d69e8f08654348f4a
router.patch('/:userId', userUpdateById); //PATCH http://localhost:5000/user/6081c18d69e8f08654348f4a
router.delete('/:userId', deleteById); //DELETE http://localhost:5000/user/6081c18d69e8f08654348f4a

export default router;
