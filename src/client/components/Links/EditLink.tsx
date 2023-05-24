import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../stylesheets/Links/EditLink.module.scss';

const EditLink = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
    
  const handleChanges = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const fullName = e.currentTarget.fullName.value;
      const email = e.currentTarget.email.value;
      const linkedin = e.currentTarget.linkedin.value;
      const phoneNumber = e.currentTarget.phoneNumber.value;
      if (!fullName) {
        setError("Please complete all required fields");
      } else {
        fetch('/editLink', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ fullName, email, linkedin, phoneNumber})
        })
        .then (res => res.json())
        .then (data => {
            if (data.error) {
                setError(data.error);
            } else {
              navigate('/links')
            }
        })
      }
  };

const handleArchive = () => {
    fetch('/editLink', {
        method:'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ archived: true })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
};

const deleteLink = () => {
    fetch('/editLink', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          // Redirect or perform additional actions after deleting the user
          navigate('/dashboard')
        })
        .catch(error => {
          console.error(error);
        });
}


    return (
        <div className={ styles.editLink}>
            <form onSubmit={ handleChanges } className={styles.form}>
                <h1> Edit Link</h1>
                <input className={styles.fullName} type="text" name="fullName" placeholder="Joe Biden"/>
                <input className={styles.email} type="email" name="email" placeholder="joebiden@whitehouse.org"/>
                <input className={styles.linkedin} type="text" name="linkedin" placeholder="https://www.linkedin.com/in/joebiden"/>
                <input className={styles.phoneNumber} type="tel" name="phoneNumber" placeholder="111-111-1111" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                {/* Stretch Feature: Add Image */}
                <input type="file" name="image" accept="image/*"/>
                <button className={styles.submitButton}>Make Changes</button>
                {error && <p className={styles.error}>{ error }</p>}
                <p> Please ensure that the changes you have made are correct. If you would like to delete this contact 
                or archive them, please choose from the options below.</p>
                <button onClick={ handleArchive } className={styles.archiveButton}>Archive / Unarchive</button>
                <button onClick={ deleteLink } className={styles.deleteButton}>Delete Link</button>
            </form>
        </div>
    )

}

export default EditLink;