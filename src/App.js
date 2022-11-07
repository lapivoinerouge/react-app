import Container from './components/Container/Container';
import SearchForm from './components/SearchForm/SearchForm';
import Hero from './components/Hero/Hero';
import List from './components/List/List';

const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
};

export default App;