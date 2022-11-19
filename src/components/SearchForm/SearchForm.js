import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchPhrase } from '../../redux/store';

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearchPhrase(''));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchPhrase(searchInput));
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder='Search...' />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

  export default SearchForm;