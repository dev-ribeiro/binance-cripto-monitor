import { createContext, ReactNode, useState } from "react"

interface Criptos {
    symbol: string
    price: string
}

interface CriptoQueryContextType {
    activeSelectCripto: Criptos
    criptos: Criptos[]
    getDataFromBinance: (params: Criptos[]) => void
    selectCripto: (params: Criptos) => void
}

export const CriptoQueryContext = createContext({} as CriptoQueryContextType)

interface CriptoQueryContextProviderProps {
    children: ReactNode
}

export function CriptoQueryContextProvider({ children }: CriptoQueryContextProviderProps) {
    const [criptos, setCriptos] = useState<Criptos[]>([])
    const [activeSelectCripto, setActiveSelectCripto] = useState({} as Criptos)

    function getDataFromBinance(data: Criptos[]) {
        setCriptos(data)
    }

    function selectCripto(cripto: Criptos) {
        setActiveSelectCripto(cripto)
    }

    return (
        <CriptoQueryContext.Provider value={{
            criptos,
            activeSelectCripto,
            getDataFromBinance,
            selectCripto
        }}>
            {children}
        </CriptoQueryContext.Provider>
    )
}