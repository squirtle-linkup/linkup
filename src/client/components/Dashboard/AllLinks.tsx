import { useNavigate } from 'react-router-dom';
import styles from '../../stylesheets/Dashboard/AllLinks.module.scss';

const AllLinks = () => {
  const navigate = useNavigate();
  const assets = ['bear.png', 'meerkat.png', 'rabbit.png', 'sloth.png', 'snake.png'];

  

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * assets.length);
    return `/src/client/assets/${assets[randomIndex]}`;
  }
  
  return (
    <div className={styles.allLinks}>
      <div className={styles.header}>
        <h1>All Links</h1>
        <button className={ styles.addLink} onClick={() => navigate('/newLink')}>+ New Link</button>
      </div>
      <div className={styles.connection}>

    </div>
      <button onClick={() => navigate('/links')}>
        <div>
          <h2>Alastair Scheuermann</h2>
          <p>Next Meet: May 24</p>
        </div>
        <img src={getRandomImage()}/> 
      </button>
      <button onClick={() => navigate('/links')}>
        <div>
          <h2>Jake Gillan</h2>
          <p>Next Meet: June 14</p>
        </div>
        <img src={getRandomImage()}/> 
      </button>  
      <button onClick={() => navigate('/links')}>
        <div>
          <h2>Joe Biden</h2>
          <p>Next Meet: May 30</p>
        </div>
        <img src="/src/client/assets/biden.jpg"/> 
      </button>   
      <button onClick={() => navigate('/links')}>
        <div>
          <h2>Nicholas Ly</h2>
          <p>Next Meet: May 25</p>
        </div>
        <img src={getRandomImage()}/> 
      </button>

      <button onClick={() => navigate('/links')}>
        <div>
          <h2>Eric Dunn</h2>
          <p>Next Meet: May 20 (overdue)</p>
        </div>
        <img src={getRandomImage()}/> 
      </button>

    </div>
  )
}

export default AllLinks;
