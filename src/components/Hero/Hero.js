import PageTitle from '../PageTitle/PageTitle';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
      <div className={styles.hero}>
        <PageTitle><span>My first React App</span></PageTitle>
        <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
      </div>
    );
  };

  export default Hero;
