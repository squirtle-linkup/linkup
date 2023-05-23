import Login from './Login';
import Register from './Register';
import styles from '../../stylesheets/Homepage/HomePage.module.scss';

import LinkView from '../Links/LinkView';

const HomePage = () => {
  return (
    <div className={ styles.homePage }>
      <header>
        <h1>LinkUp</h1>
        <h2>pain pain pain</h2>
      </header>
      <div className={ styles.wrapperdiv }>
        <Login />
        <article className={ styles.description }>
          <h1>This is the start h1 hahahah</h1>
        </article>
      </div>
      <div className={ styles.registration }>
        < Register />
      </div>
      < LinkView />
    </div>
  )
}

export default HomePage;
