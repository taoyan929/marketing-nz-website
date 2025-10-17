// import the Hero style
import styles from './Hero.module.css';

export default function Hero() {
  return (
    //Outer hero: Full background image + text layer
    <section className={styles.hero}>
        {/* Main text */}
        <h1 className={styles.title}>
            Discover amazing places <br />
            Around New Zealand
        </h1>

        {/* Search area */}
        <form className={styles.search} role='search' onSubmit={(e) => e.preventDefault()}>
            <input type="search" className={styles.input} placeholder='Search destinations...' />
            <button type="submit" className={styles.button}>SEARCH</button>
        </form>
    </section>
  )
}
