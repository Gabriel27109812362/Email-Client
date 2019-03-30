import React from 'react';
import styles from './NewMessage.module.scss';

const NewMessage = (props) => {
   return (
      <button className={styles.message}>
         <img className={styles.symbol} src={require('./envelop.svg')} alt='at'/>
         <p className={styles.pgr}>Nowa Wiadomość</p>
      </button>
   );
};
export default NewMessage;
