import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ColumnForm = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
    setTitle('');
    setIcon('');
  };

	return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>Title: </label>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <label>Icon: </label>
      <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>
        <span>Add column</span>
      </Button>
    </form>
	);
};

export default ColumnForm;
