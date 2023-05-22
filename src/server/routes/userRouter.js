console.log('Hello from userRouter.js')
import express from 'express';
// import userController from '../controllers/userController.js';

const userRouter = express.Router();

// userRouter.post('/register',
//   userController.registerUser,
//   (req, res) => {
//     console.log(`--> Sending data from userRouter.POST /signup to client`)
//     return res.status(200).json(res.locals.user);
//   }
// );

// userRouter.post('/login',
//   userController.loginUser,
//   (req, res) => {
//     console.log(`--> Sending data from userRouter.POST /login to client`)
//     return res.status(200).json(res.locals.user);
//   }
// )

export default userRouter;
