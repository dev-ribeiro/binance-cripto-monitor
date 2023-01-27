import { useContext } from 'react';
import { Card, Placeholder } from 'react-bootstrap';
import { CriptoQueryContext } from '../../../../context/CriptoQueryContext';

export function ResultCriptoQuery() {
  const { activeSelectCripto } = useContext(CriptoQueryContext);

  return (
    <Card className="m-auto" style={{ width: '18rem' }}>
      {!activeSelectCripto.symbol ? (
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} />
            {' '}
            <Placeholder xs={4} />
            {' '}
            <Placeholder xs={4} />
            {' '}
            <Placeholder xs={6} />
            {' '}
            <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      ) : (
        <Card.Body>
          <Card.Title>{activeSelectCripto.symbol}</Card.Title>
          <Card.Text>
            O preço é
            {' '}
            {Number(activeSelectCripto.price).toFixed(2)}
          </Card.Text>
        </Card.Body>
      )}
    </Card>
  );
}
