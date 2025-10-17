import styles from './App.module.css';

// Import all of components 
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';

function App() {

  return (
    <div className={styles.page}>
      {/* Header component */}
      <Header />
      {/* Hero component */}
      <Hero />
      {/* Gallery component */}
      <Gallery />

      {/* Footer  */}
        <footer className={styles.footer}>
            <h3>Copyright 2025 by Tao Yan. All rights reserved.</h3>  
        </footer>
    </div>
  )
}

export default App
