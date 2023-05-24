import React from 'react';
import styles from '../../stylesheets/Dashboard/Topbar.module.scss';
import { useNavigate } from 'react-router-dom';
    const Topbar = () => {
      const navigate = useNavigate();

        return (
          <div className={ styles.topbar }>
            <div className= {styles.background }>
              <div>
                <h3 className={styles.overDue}>Overdue Links</h3>
                {/* Add content for 'Overdue Links' section */}
                <div className={styles.linkName}>
                  <span><button>Eric Dunn</button> &nbsp;&nbsp;</span>
                </div>
              </div>
              <div>
                <h3>Today</h3>
                <span><button onClick={() => navigate('/links')}>Joe Biden</button> &nbsp;&nbsp;</span>
              </div>
              <div>
                <h3>Tomorrow</h3>
                <span><button>Jake Gillan</button> &nbsp;&nbsp;</span>
                <span><button>Nicholas Ly</button> &nbsp;&nbsp;</span> 
                <span><button>Alastair Scheuermann</button> &nbsp;&nbsp;</span>
              </div>
            </div>
          </div>
        );
      }
      
  export default Topbar;