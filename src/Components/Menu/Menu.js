import React from 'react';
import styles from './Menu.module.scss';
import NewMessage from './NewMessage/NewMessage';
import Option from './Option/Option';


const Menu = (props) => {
   return (
      <div className={styles.container}>
      <NewMessage/>
      <Option/>
      </div>
   );
};
export default Menu;
