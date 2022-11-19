import styles from './NavBar.module.scss';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <div className={styles.logoWrapper}>
          <Link to='/'><span className={styles.icon + ' fa fa-tasks'}></span></Link>
        </div>
        <ul className={styles.navlinks}>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.link} to='/favorite'>Favorite</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.link} to='/about'>About</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;