import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../lib/axios"

interface Criptos {
    symbol: string
    price: string
}

interface CriptoQueryContextType {
    activeSelectCripto: Criptos
    criptos: Criptos[]
    selectCripto: (params: Criptos) => void
}

export const CriptoQueryContext = createContext({} as CriptoQueryContextType)

interface CriptoQueryContextProviderProps {
    children: ReactNode
}

export function CriptoQueryContextProvider({ children }: CriptoQueryContextProviderProps) {
    const [criptos, setCriptos] = useState<Criptos[]>([])
    const [activeSelectCripto, setActiveSelectCripto] = useState({} as Criptos)

    function selectCripto(cripto: Criptos) {
        setActiveSelectCripto(cripto)
    }

    useEffect(() => {
        api
            .get('/ticker/price')
            .then(response => setCriptos(response.data))
    }, [])

    return (
        <CriptoQueryContext.Provider value={{
            criptos,
            activeSelectCripto,
            selectCripto
        }}>
            {children}
        </CriptoQueryContext.Provider>
    )
}