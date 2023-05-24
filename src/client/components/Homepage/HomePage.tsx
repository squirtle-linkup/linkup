import Login from './Login';
import Register from './Register';
import styles from '../../stylesheets/Homepage/HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={ styles.homePage }>
      <header>
        <h1>LinkUp</h1>
        <h2>connections made easy</h2>
      </header>
      <div className={ styles.wrapperdiv }>
        <Login />
        <article className={ styles.description }>
          <h1>Track your connections and links with a user friendly interface that reminds you to reach out!</h1>
          <p>Making connections is hard. Keeping track of who to reach out, and when is even harder. Here at LinkUp, we believe
            that making connections should be easy. Our user friendly interface allows you to keep track of all your connections
            and reminds you when to reach out. With LinkUp, you'll never miss a connection again!
          </p>
        </article>
      </div>
      <div className={styles.images}>
      </div>
      <div className={ styles.registration }>
        < Register />
      </div>
    </div>
  )
}

export default HomePage;
