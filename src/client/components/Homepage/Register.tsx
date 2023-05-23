import React, { useState } from 'react';
import styles from '../../stylesheets/Homepage/Register.module.scss';

const Register = () => {
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // grab the name, username, email and password from the form
    const name = e.currentTarget.displayName.value;
    const username = e.currentTarget.username.value;
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    if (!username || !password || !email || !name) {
      setError("Please enter a valid username and password");
    } else {
      // "Post" fetch request to the server with the username, email and password in the body
      fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, username, email, password })
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
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
    <div className={ styles.register }>
      <form onSubmit={ handleSubmit }>
        <h1>Register Now!</h1>
        <input className={styles.displayName} type="text" name="displayname" placeholder="display name"/>
        <input className={styles.username} type="text" name="username" placeholder="username"/>
        <input className={styles.email} type="text" name="email" placeholder="email"/>
        <input className={styles.password} type="password" name="password" placeholder="password"/>
        <button className={styles.loginButton}>Register</button>
        {error && <p className={styles.error}>{ error }</p>}

      </form>
    </div>
  )
}

export default Register