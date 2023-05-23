console.log('Hello from userRouter.js')
import express from 'express';
import { userController } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register',
  userController.duplicateUserCheck,
  userController.registerUser,
  userController.newConnTable,
  (req, res) => {
    console.log(`--> Sending data from userRouter.POST /signup to client`)
    return res.sendStatus(200);
  }
);

// userRouter.post('/login',
//   userController.loginUser,
//   (req, res) => {
//     console.log(`--> Sending data from userRouter.POST /login to client`)
//     return res.status(200).json(res.locals.user);
//   }
// )

// To get user dashboard
// userRouter.get('/dashboard',
//     userController.getDashboard,
//     (req, res) => {
//         console.log(`We've retrieved the dashboard!`)
//         return res.status(200).json(res.locals.user);
//     }
// );

// Create new user LinkUp connection
// userRouter.post('/newLink',
//     userController.newLink,
//     (req, res) => {
//         console.log(`We've created a new link!`)
//         return res.status(200).json(res.locals.user);
//     }
// );



export default userRouter;
