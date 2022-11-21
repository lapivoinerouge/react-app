import styles from './Card.module.scss';
import clsx from 'clsx';
import { addToFavorites, isFavorite } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

const Card = props => {
    const favCard = useSelector(state => isFavorite(state, props.id));

    const dispatch = useDispatch();
    
      const addToFav = e => {
        e.preventDefault();
        dispatch(addToFavorites(props.id));
      }

    return (
        <li className={styles.card} key={props.id}>
            {props.title}
            <button className={styles.button} onClick={addToFav}>
                <span className={clsx(styles.icon, 'fa fa-star-o', favCard && styles.isFavorite)}></span>
            </button>
        </li>
    );
};

export default Card;