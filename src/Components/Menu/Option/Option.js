import React from 'react';
import styles from './Option.module.scss';

const Option = (props) => {
   return (
      <button className={styles.option}>
         <img className={styles.symbol} src={props.symbol}/>
         <p>{props.children}</p>
      </button>
   );
};
export default Option;
