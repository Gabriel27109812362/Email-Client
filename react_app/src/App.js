import React, {Component} from 'react';
import styles from './App.module.scss';
import Logo from './Components/Logo/Logo';

class App extends Component {
   render() {
      return (
         <div className={styles.App}>
            <Logo/>
         </div>
      );
   }
}

export default App;
