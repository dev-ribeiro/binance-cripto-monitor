import { Container } from 'react-bootstrap';
import { DescriptionContainer } from './components/DescriptionContainer';
import { SearchCripto } from './components/SearchCripto';
import { ResultCriptoQuery } from './components/ResultCriptoQuery';
import styles from './styles.module.css';

export function Home() {
  return (
    <Container as="main" className={styles.home_container}>
      <DescriptionContainer />
      <section className="mt-3 p-2 bg-dark rounded">
        <h2 className="fs-4 my-2 mx-1 text-light text-left">Faça sua busca nesse painel:</h2>
        <div className={styles.query_container}>
          <SearchCripto />
          <ResultCriptoQuery />
        </div>
      </section>
    </Container>
  );
}
