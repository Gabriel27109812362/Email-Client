import React, {Component} from 'react';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import MainContainer from './Components/MainContainer/Container';

class App extends Component {
   render() {
      return (
         <div className={styles.App}>
            <Header/>
            <MainContainer>
               <Menu/>
            {/*   Router*/}
            </MainContainer>

         </div>
      );
   }
}

export default App;
