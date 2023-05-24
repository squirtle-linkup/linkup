import React, { useState, createContext, useContext } from 'react';
import { UserContext } from '../App';
import styles from '../../stylesheets/Homepage/Login.module.scss';


const Login = () => {
  const [error, setError] = useState<string>("");
  const { setUserId } = useContext(UserContext);
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // grab the username and password from the form
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    if (!username || !password) {
      setError("Please enter a valid username and password");
    } else {
      // "Post" fetch request to the server with the username and password in the body
      fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setUserId(data.user_id);
          // redirect to the dashboard replace with react routers later!!
          window.location.href = '/dashboard';
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
  };

  return (
    <div className={ styles.login }>

      <form onSubmit={ handleSubmit }>
        <h1>Login</h1>
        <input className= {styles.username} type="text" name="username" placeholder="username"/>
        <input className={styles.password} type="password" name="password" placeholder="password"/>
        <button className={styles.loginButton} type="submit">Login</button>
        {error && <p className={styles.error}>{ error }</p>}

      </form>
    </div>
  )
}

export default Login;
