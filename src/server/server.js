console.log('Hello from server.ts');
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
// import userRouter from './routes/userRouter.js';

const app = express();

// PARSE ALL REQUEESTS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Parses cookies attached to the client request object

// ROUTES
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve('./client/index.html'))
})

// // ROUTE HANDLERS
// app.use('/api/users', userRouter);

// UNKNOWN ROUTE HANDLER
app.use((req, res) => res.status(404).send('404: Page not found UNKNOWN ROUTE HANDLER'));

// GLOBAL ERROR HANDLER
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  }
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


// START SERVER
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});