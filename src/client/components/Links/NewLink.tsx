import React, { useState } from 'react';
import styles from '../../stylesheets/Links/NewLink.module.scss';


const NewLink = () => {
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // grab the fullName, email, linkedin, phoneNumber, and notes from the form
    const fullName = e.currentTarget.fullName.value;
    const email = e.currentTarget.email.value;
    const linkedin = e.currentTarget.linkedin.value;
    const phoneNumber = e.currentTarget.phoneNumber.value;
    const notes = e.currentTarget.notes.value;
    if (!fullName) {
      setError("Please complete all required fields");
    } else {
    // Post fetch request to the server with the fullName, email, linkedin, phoneNumber, and notes in the body
      fetch('/newLink', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName, email, linkedin, phoneNumber, notes })
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          // redirect to the dashboard replace with react routers later!!
          window.location.href = '/dashboard'; // Should Actually Redirect to the Person's Card After Creation
        }
      })
    }
  };
  return (
    <div className={ styles.newLink }>
      <form onSubmit={ handleSubmit } className={styles.form}>
        <h1>New Link</h1>
        <p>Fields with 📌 are required</p>
        <input className={styles.fullName} type="text" name="fullName" placeholder="📌 full name"/>
        <input className={styles.email} type="email" name="email" placeholder="email"/>
        <input className={styles.linkedin} type="text" name="linkedin" placeholder="linkedin url"/>
        <input className={styles.phoneNumber} type="tel" name="phoneNumber" placeholder="phone number XXX-XXX-XXXX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
        {/* Stretch Feature: Add Image */}
        <input type="file" name="image" accept="image/*"/>
        <textarea className={styles.notes} name="notes" placeholder="notes" style={{height:"20rem"}}/>
        <button className={styles.submitButton}>Create Link</button>
        {error && <p className={styles.error}>{ error }</p>}
      </form>
    </div>
  )
}

export default NewLink;
