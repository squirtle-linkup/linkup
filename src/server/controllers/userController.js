import { client } from '../server.js'

export const userController = {};

//This will create a new user
userController.duplicateUserCheck = (req, res, next) => {
  const { username } = req.body;
  const queryDuplicateUsername = `SELECT username FROM users WHERE username='${username}'`;
  client.query(queryDuplicateUsername)
    .then((data) => {
      console.log(data.rows[0].username);
      if (data.rows.length === 0) {
        return next();
      }
      else {
        return next({
        log: 'Duplicate username found',
        status: 500,
        message: { err: 'That username is already in use.'},
        })
      }
    })
    .catch(() => {
      const err = {
        log: 'An error occured in middleware registerUser while checking for duplicate usernames',
        status: 500,
        message: { err: 'Error occured during registration'},
      }
      return next(err);
    })
}

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
    //console.log(data);
    return next();
    })
    .catch(() => {
      const err = {
        log: 'An error occured in middleware newConnTable when creating a new table/',
        status: 500,
        message: { err: 'Error occured during table creation.'},
      }
      return next(err);
    });
  };
    
// Login user based on credentials and retrieve user_id for dashboard display
// WIP
userController.loginUser = (req, res, next) => {
  console.log('We are logging in')
  const { username, password} = req.body;
  const queryString = `SELECT ${username}
                       FROM users
                       RETURNING user_id, password`;
client.query(queryString)
  .then(data => {
    if(password === data.password){
      res.redirect('/dashboard');
      return next();
    } else {
      console.log(`User doesn't exist`);
      res.redirect('/register');
      return next();
    }
  })
  .catch(() => {
    const err = {
      log: 'An error occured in middleware loginuser while verifying the user within the database.',
      status: 500,
      message: { err: 'Error occured during login.'},
    }
    return next(err);
  });
};

userController.editLink = (req, res, next) => {
  const { user_id, connection_id, full_name, email, phone_number, linkedin, notes, linkups, archived } = req.body;
  const editQuery = `UPDATE connections_${user_id}
                      SET full_name = ${full_name}
                      email = ${email}
                      phone_number = ${phone_number}
                      linkedin = ${linkedin}
                      notes = ${notes}
                      linkups = ${linkups}
                      archived = ${archived}
                      WHERE connection_id = ${connection_id}`
  client.query(editQuery)
    .then((data) => {
      console.log(data);
      return next();
    })
    .catch(() => {
      const err = {
        log: 'Error occured in middleware editLink in userController',
        status: 500,
        message: { err: 'Error occured while updating your links'},
      }
      return next(err);
    });
};

// userController.getDashboard = (req, res, next) => {

// };

//Have user input their user_id? Need to somehow grab user_id to get correct connection table
userController.newLink = (req, res, next) => {
console.log('Creating a new connection');
//Deconstruct object to hold user input per relevant named column
const { user_id, fullname, email, linkedin, phonenumber } = req.body;
//Code to retrieve connection table related to user_id if user_id isn't given to us
// const getConnectionTable = `SELECT username
//                             FROM users
//                             RETURNING user_id`;
// client.query(getConnectionTable)
//   .then(data => {
//     //Store user_id value in res.locals
//     res.locals.user_id = data;
//     console.log(`This is the user id: ${res.locals.user_id}`);
//     console.log(`Table retrieved to create a new link`);
//     return next();
//   })
//   .catch(() => {
//     const err = {
//       log: 'An error occured in middleware newLink while retrieving the related user connections table.',
//       status: 500,
//       message: { err: 'Error occured during table retrieval.'},
//     }
//     return next(err);
//   });
//Code to create new connection within connection trable retrieved from related user_id
const queryString = `INSERT INTO connections_${user_id} (fullname, email, linkedin, phonenumber)
                     VALUES ('${fullname}', '${email}', '${linkedin}', '${phonenumber}')`;
client.query(queryString)
  .then(data => {
  res.locals.newconnection = data;
  console.log(res.locals.newconnection);
  console.log('Successfully added new connection');
  return next();
 })
 .catch(() => {
  const err = {
    log: 'An error occured in middleware newLink while creating a new connection for the user.',
    status: 500,
    message: { err: 'Error occured during new link creation.'},
  }
  return next(err);
})
};

//module.exports = userController;