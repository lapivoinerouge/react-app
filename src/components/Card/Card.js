import styles from './Card.module.scss';
import clsx from 'clsx';
import { addToFavorites, isFavorite, removeCard } from '../../redux/cardsRedux';
import { useDispatch, useSelector } from 'react-redux';

const Card = props => {
    const favCard = useSelector(state => isFavorite(state, props.id));

    const dispatch = useDispatch();
    
    const addToFav = e => {
      e.preventDefault();
      dispatch(addToFavorites(props.id));
    }

    const deleteCard = e => {
      e.preventDefault();
      dispatch(removeCard(props.id));
    }

    return (
        <li className={styles.card} key={props.id}>
            {props.title}
            <div>
              <button className={styles.button} onClick={addToFav}>
                <span className={clsx(styles.icon, 'fa fa-star-o', favCard && styles.isFavorite)}></span>
              </button>
              <button className={styles.button} onClick={deleteCard}>
                <span className={clsx(styles.icon, 'fa fa-trash')}></span>
              </button>
            </div>
        </li>
    );
};

export default Card;