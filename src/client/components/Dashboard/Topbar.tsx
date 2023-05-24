import React from 'react';
import styles from '../../stylesheets/Dashboard/Topbar.module.scss';
    const Topbar = () => {
      
        return (
          <div className={ styles.topbar}>
            <div>
              <h3>Overdue Links</h3>
              {/* Add content for 'Overdue Links' section */}
            </div>
            <div>
              <h3>Today</h3>
              {/* Add content for 'Today' section */}
            </div>
            <div>
              <h3>Tomorrow</h3>
              {/* Add content for 'Tomorrow' section */}
            </div>
          </div>
        );
      }
      
  export default Topbar;