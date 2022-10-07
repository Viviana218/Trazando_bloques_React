import React from 'react';
import Header from './Components/Header';
import styles from "./Components/App.module.css"
import Navigation from './Components/Navigation';
import Main from './Components/Main';

 
                
function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Navigation />
      <Main/>
    </div>
  );
}
              
export default App;
