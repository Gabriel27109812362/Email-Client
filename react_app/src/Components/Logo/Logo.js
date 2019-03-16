import React from 'react';
import styles from './Logo.module.scss';
const Logo = (props) => {
   return (
      <div className={styles.container}>
         <img src={require('./email.svg')} alt='Email logo'/>
      </div>
   );
};
export default Logo;
