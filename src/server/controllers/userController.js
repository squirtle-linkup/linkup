import { client } from '../server.js'

export const userController = {};

//This will create a new user
 userController.registerUser = (req, res, next) => {
    console.log('Registering new user');
    const { username, password, email } = req.body;
    const queryString = `INSERT INTO users (username, password, email)
                         VALUES ('${username}', '${password}', '${email}')
                         RETURNING user_id`;

    client.query(queryString)
        .then(data => {
            res.locals.user_id = data.rows[0].user_id;
            console.log(res.locals.user_id);
            console.log('New user has been registered');
            return next();
        })
        .catch((err) => {return next(err)});  
};

  userController.newConnTable = (req, res, next) => {
    const connTableQuery = `CREATE TABLE connections_${res.locals.user_id} (
                      connection_id SERIAL,
                      full_name VARCHAR,
                      email VARCHAR,
                      phone_number VARCHAR,
                      linkedin VARCHAR,
                      notes VARCHAR,
                      linkups INT DEFAULT 0,
                      archived BOOL DEFAULT false
                      )`;
    client.query(connTableQuery)
      .then((data) => {
      console.log(data);
      return next();
      })
      .catch((err) => {return next(err)}); 
};

/** 
 * userController.newLink = (req, res, next) => {
 *  console.log('Creeating a new connection');
 *  const { fullname, email, linkedin, phonenumber } = req.body;
 *  const queryString = `INSERT INTO --connections_id-- (fullname, email, linkedin, phonenumber)
 *                       VALUES ('${fullname}', '${email}', '${linkedin}', '${phonenumber})
 *  client.query(queryString)
 *   .then(data => {
 *      res.locals.newconnection = data;
 *      console.log(res.locals.newconnection);
 *      console.log('Successfully added new connection');
 *      return next();
 *   })
 * }
 * 
*/
      



//module.exports = userController;