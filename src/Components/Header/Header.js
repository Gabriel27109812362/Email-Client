import React from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';

const Header = props => {

   return (
      <div className={styles.Header}>
         <Logo/>

      </div>
   );
};
export default Header;
