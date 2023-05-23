import React, { useState } from 'react';
import styles from '../../stylesheets/Links/LinkView.module.scss';

const LinkView = () => {
  const [linkCount, setLinkCount] = useState(0);
  // Notes:
  //  1. We need to fetch the data for the specific person from the database
  //  2. We need to display the data in the correct fields
  

  const handleBack = (e) => {
    const notes = e.currentTarget.notes.value;
    fetch ('/editLink', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ notes, linkCount })
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        console.log("error in LinkView handleBack", data.error)
      } else {
        // redirect to the dashboard replace with react routers later!!
        window.location.href = '/dashboard';
      }
    })
  }

  const handleEdit = () => {
    window.location.href = '/editLink';
  }

  const handleLinkUp = () => {
      if (linkCount < 3) {
        if (confirm("Are you sure you want to record a linkup?")) {
          setLinkCount(linkCount + 1);
      }
    } else {
        if (confirm("Are you sure you want to reset the linkup count?")) {
          setLinkCount(0);
        }
      }
  }

  return (
    <div className={ styles.linkView }>
      <div className={styles.wrapper1}>
        <button onClick={ handleBack }>Save and Return</button>
        <button onClick={ handleEdit }>Edit</button>
      </div>
      <div className={styles.linkInformation}>
        <div className={styles.wrapper2}>
          <h2 className={styles.linkName}>...name placeholder...</h2>
          <p className={styles.linkUrl}>email:</p>
          <p className={styles.linkUrl}>linkedin:</p>
          <p className={styles.linkUrl}>phone #:</p>
        </div>
        <div className={styles.image}>
          <img src="/src/client/assets/biden.jpg" max-width="2rem" alt="link image"/>
        </div>
      </div>
      <div className={styles.linkUp}>
        <h2>LINKUPS DONE: </h2>
        <button className={styles.linkUpButton} onClick={handleLinkUp}>{linkCount}</button>
      </div>
      <textarea className={styles.notes} name="notes" placeholder="notes" style={{height:"20rem"}}/>
    </div>
  )
}

export default LinkView;

// add unarchive button if the link's archive status is true
  //then add the unarchive to the back button