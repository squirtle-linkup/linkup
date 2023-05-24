import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../stylesheets/Homepage/Register.module.scss';

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // grab the name, username, email and password from the form
    const username = e.currentTarget.username.value;
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    console.log( username, email, password)
    if (!username || !password || !email) {
      setError("Fill complete all fields");
    } else {
      // "Post" fetch request to the server with the username, email and password in the body
      fetch('api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          // redirect to the dashboard replace with react routers later!!
          navigate('/dashboard')
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
        <input className={styles.username} type="text" name="username" placeholder="username"/>
        <input className={styles.email} type="text" name="email" placeholder="email"/>
        <input className={styles.password} type="password" name="password" placeholder="password"/>
        <button className={styles.loginButton} type="submit">Register</button>
        {error && <p className={styles.error}>{ error }</p>}
      </form>
    </div>
  )
}

export default Register