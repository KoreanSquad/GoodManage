const express = require('express');
const mainRouter = ('')
const loginRouter = ('')
const PORT = 3000;


const app = express();

app.use(express.json());

// Api Endpoints
app.use('/api', mainRouter);
app.use('/login', loginRouter);

// Global Error Catcher
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
  
  // Start Server
  app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}...`);
    });
  
  
    
  module.exports = app;