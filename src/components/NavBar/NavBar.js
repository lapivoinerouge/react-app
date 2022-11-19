import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <div className={styles.logoWrapper}>
          <a href='/'><span className={styles.icon + ' fa fa-tasks'}></span></a>
        </div>
        <ul className={styles.navlinks}>
          <li><a href='/'>Home</a></li>
          <li><a href='/favorite'>Favorite</a></li>
          <li><a href='/about'>About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;