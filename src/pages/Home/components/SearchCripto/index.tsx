import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export function SearchCripto() {
    return (
        <Form className='p-3 bg-info rounded'>
            <Form.Select>
                <option>Busque a criptomoeda desejada</option>
            </Form.Select>
            <Button
                className='my-2'
                type='submit'
            >Buscar</Button>
        </Form>
    );
}
