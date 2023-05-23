import styles from '../../stylesheets/Links/NewLink.module.scss';


const NewLink = () => {

  return (
    <div className={ styles.newLink }>
      <form className={styles.form}>
        <h1>New Link</h1>
        <input className={styles.fullName} type="text" name="fullName" placeholder="full name"/>
        <input className={styles.email} type="text" name="email" placeholder="email"/>
        <input className={styles.linkedin} type="text" name="linkedin" placeholder="linkedin url"/>
        <div className={styles.phoneNumber}>
          <input type="number" name="areaCode" placeholder="area code"/>
          <input type="number" name="phoneNumber" placeholder="phone number"/>
          
        </div>
      </form>
    </div>
  )
}

export default NewLink;
