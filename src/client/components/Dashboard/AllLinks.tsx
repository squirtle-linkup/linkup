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
      <button onClick={() => navigate('/links')}><p>Alastair Scheuermann</p><img src={getRandomImage()}/> </button>
      <button onClick={() => navigate('/links')}><p>Jake Gillan</p><img src={getRandomImage()}/> </button>
      <button onClick={() => navigate('/links')}><p>Joe Biden</p><img src="/src/client/assets/biden.jpg"/> </button>
      <button onClick={() => navigate('/links')}><p>Nicholas Ly</p><img src={getRandomImage()}/> </button>
      <button onClick={() => navigate('/links')}><p>Eric Dunn</p><img src={getRandomImage()}/> </button>
    </div>
  )
}

export default AllLinks;
