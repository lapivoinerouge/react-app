import styles from './Favorite.module.scss';
import PageTitle from "../PageTitle/PageTitle";
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { getAllFavoriteCards } from '../../redux/store';

const Favorite = () => {
  const favoriteCards = useSelector(getAllFavoriteCards);

  return (
    <section>
      <PageTitle><span>Favorite</span></PageTitle>  
      <div className={styles.favorites}>
        <ul className={styles.cards}>
          {favoriteCards.map(card => <Card key={card.id} id={card.id} title={card.title} />)}
        </ul>
      </div>
    </section>
  );
};

export default Favorite;