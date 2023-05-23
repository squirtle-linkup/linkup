import styles from '../stylesheets/NewLink.module.scss';


const NewLink = () => {

  return (
    <div className={ styles.newLink }>
      <h1>This is New Link</h1>
      <form className={styles.form}>
        <h1>New Link</h1>
        <input className={styles.fullName} type="text" name="fullName" placeholder="full name"/>
        <input className={styles.email} type="text" name="email" placeholder="email"/>
        <input className={styles.linkedin} type="text" name="linkedin" placeholder="linkedin url"/>



      </form>
    </div>
  )
}

export default NewLink;
