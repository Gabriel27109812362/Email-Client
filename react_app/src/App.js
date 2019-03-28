import React, {Component} from 'react';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';

class App extends Component {
   render() {
      return (
         <div className={styles.App}>
            <Header/>
            <Menu/>
         </div>
      );
   }
}

export default App;
