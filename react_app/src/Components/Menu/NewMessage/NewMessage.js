import React from 'react';
import styles from './NewMessage.module.scss';

const NewMessage = (props) => {
   return (
      <button className={styles.container}>
         <div>
            <p>Nowa Wiadomość</p>
            <img src={require('./myat.svg')} alt='at'/>
         </div>
      </button>
   );
};
export default NewMessage;
