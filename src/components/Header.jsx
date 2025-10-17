// import a CSS module file from the same directory
import styles from './Header.module.css';


export default function Header() {

  return (
    <header className={styles.header}>
        {/* left side logo and company name */}
        <div className={styles.brandGroup}>
            <img src="/images/logo.png" alt="logo" className={styles.logo} />
            <div className={styles.brand}>Marketing NZ</div>
        </div>

        {/* Right side：The hamburger button displayed on the mobile device */}
        <button className={styles.menuBtn}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </button>

        {/* Right side: The navigation menu displayed on the desktop version */}
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li><a href="#" className={styles.navLink}>About</a></li>
                <li><a href="#" className={styles.navLink}>Work</a></li>
                <li><a href="#" className={styles.navLink}>News</a></li>
            </ul>
            <button className={styles.loginBtn}>Login</button>
        </nav>
    </header>
  )
}
