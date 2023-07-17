import { FormEvent, useEffect, useRef, useState } from "react";
import { Button, Card, Container, Form, Spinner } from "react-bootstrap";
import { api } from "../../lib/axios";
import { useCriptoQuery } from "../../hooks/useCriptoQuery";

export function Criptos() {
  const { criptos } = useCriptoQuery();
  const [isOpenMonitor, setIsOpenMonitor] = useState(false)
  const [criptoPrice, setCriptoPrice] = useState<string | null>(null);
  const intervalId = useRef<number | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const select = form.querySelector('.select') as HTMLSelectElement
    const cripto = select.value

    monitoringMarket(cripto);
  }

  function monitoringMarket(cripto: string) {
    const crawlerTime = 5000

    intervalId.current = setInterval(() => {
      api
        .get('/ticker/price', {
          params: {
            symbol: cripto
          }
        })
        .then(response => {
          console.log(response.data)
          setCriptoPrice(response.data.price)
        })
    }, crawlerTime)

    setIsOpenMonitor(true);
  }

  useEffect(() => {
    if(!isOpenMonitor) return;

    const timeout = 1 * 60 * 1000// 5 minuto

    setTimeout(() => {
      clearInterval(intervalId.current!)
      setIsOpenMonitor(false)
      setCriptoPrice(null)
    }, timeout);
  }, [isOpenMonitor])

  return (
    <Container
      as="div"
      className="mt-2 p-2 d-flex justify-content-center bg-secondary"
      fluid
    >
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Selecione aqui o criptoativo:</Card.Title>
            <Form onSubmit={handleSubmit}            >
              <Form.Select className="select">
                {criptos.map(item => (
                  <option key={item.symbol} value={item.symbol}>{item.symbol}</option>
                ))}
              </Form.Select>
              <Button type="submit">Monitorar</Button>
            </Form>
          </Card.Body>
        </Card>
        {isOpenMonitor && (
          <Card className="mt-2"          >
            <Card.Body>
              <div className="d-flex align-items-center gap-2"              >
                <Spinner animation="border" role="status" />
                <span>Monitorando o ativo selecionado será monitorado por 1 minuto</span>
                <span>O preço do criptoativo atual é de: $ {Number(criptoPrice).toFixed(2)}</span>
              </div>
            </Card.Body>
          </Card>
        )}
      </Container>
    </Container>
  );
}
