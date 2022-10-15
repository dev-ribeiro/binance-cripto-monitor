import { createContext, ReactNode, useState } from "react"

interface Criptos {
    symbol: string
    price: string
}

interface CriptoQueryContextType {
    criptos: Criptos[]
    handleGetDataFromBinance: (params: Criptos[]) => void
}

export const CriptoQueryContext = createContext({} as CriptoQueryContextType)

interface CriptoQueryContextProviderProps {
    children: ReactNode
}

export function CriptoQueryContextProvider({ children }: CriptoQueryContextProviderProps) {
    const [criptos, setCriptos] = useState<Criptos[]>([])

    function handleGetDataFromBinance(data: Criptos[]) {
        setCriptos(data)
    }

    return (
        <CriptoQueryContext.Provider value={{
            criptos,
            handleGetDataFromBinance
        }}>
            {children}
        </CriptoQueryContext.Provider>
    )
}