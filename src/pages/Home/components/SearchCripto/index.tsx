import {FormEvent} from 'react'
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CriptoQueryContext } from '../../../../context/CriptoQueryContext';

export function SearchCripto() {
    const { criptos, selectCripto } = useContext(CriptoQueryContext)

    function handleSelectedCripto(event: FormEvent): void {
        event.preventDefault()

        const resultQuery = (event.target as HTMLFormElement).query.value
        const filterCripto = criptos.filter(cripto => {
            return cripto.symbol === resultQuery
        })

        selectCripto(filterCripto[0])
    }

    return (
        <Form
            onSubmit={handleSelectedCripto}
            className='p-3 bg-info rounded'
        >
            <Form.Select name='query'>
                <option>Busque a criptomoeda desejada</option>
                {criptos.map(cripto => {
                    return (
                        <option
                            key={cripto.symbol}
                            value={cripto.symbol}
                        >{cripto.symbol}</option>
                    )
                })}
            </Form.Select>
            <Button
                className='my-2'
                type='submit'
            >Buscar</Button>
        </Form>
    );
}
