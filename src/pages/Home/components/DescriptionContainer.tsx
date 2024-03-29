import Card from 'react-bootstrap/Card'

export function DescriptionContainer() {
  return (
    <section>
      <Card className="my-3">
        <Card.Title className="bg-dark text-light text-center p-1 rounded ">Projeto</Card.Title>
        <Card.Body>Uma aplicação React que faz requisições à API da Binance e consegue obter dados de pares de moeda.</Card.Body>
      </Card>
      <Card className="my-3">
        <Card.Title className="bg-danger text-light text-center p-1 rounded ">Avisos</Card.Title>
        <Card.Body>A aplicação utiliza como base o servidor de testes da Binance, a rede Testnet. Portanto, não me responsabilizo caso seja utilizada na rede principal.</Card.Body>
      </Card>
    </section>
  );
}
