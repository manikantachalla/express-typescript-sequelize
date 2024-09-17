import express from 'express';
import { userValidationRules } from '../utils/validator.util';
import { UserController } from '../controllers/user.controller';

const router = express.Router();

const userController = new UserController();

// Apply the validation middleware before the controller
router.post('/users', userValidationRules(), userController.createUser);

export default router;