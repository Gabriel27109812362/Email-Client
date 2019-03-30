import React from 'react';
import styles from './Logo.module.scss';
const Logo = () => {
   return (
      <div className={styles.container}>
         <img src={require('./email.svg')} alt='Email logo'/>
         <p className={styles.sign} >My mail</p>
      </div>
   );
};
export default Logo;
