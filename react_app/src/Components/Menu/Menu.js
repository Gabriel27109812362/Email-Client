import React from 'react';
import styles from './Menu.module.scss';
import NewMessage from './NewMessage/NewMessage';

const Menu = (props) => {
   return (
      <div className={styles.container}>
      <NewMessage/>
      </div>
   );
};
export default Menu;
