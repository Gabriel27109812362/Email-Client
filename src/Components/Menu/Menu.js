import React from 'react';
import styles from './Menu.module.scss';
import NewMessage from './NewMessage/NewMessage';
import Option from './Option/Option';


const Menu = (props) => {
   return (
      <div className={styles.container}>
      <NewMessage/>
         <Option>Odebrane</Option>
         <Option>Wysłane</Option>
         <Option>Wszystkie</Option>
         <Option>Kosz</Option>
      </div>
   );
};
export default Menu;
