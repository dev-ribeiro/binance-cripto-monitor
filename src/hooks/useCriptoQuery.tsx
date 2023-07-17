import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

type Criptos = {
  symbol: string
  price: string
}

type CriptoQueryContextType = {
  activeSelectCripto: Criptos
  criptos: Criptos[]
  selectCripto: (params: Criptos) => void
}

const CriptoQueryContext = createContext({} as CriptoQueryContextType)

type CriptoQueryContextProviderProps = {
  children: ReactNode
}

export function CriptoQueryContextProvider({
  children,
}: CriptoQueryContextProviderProps) {
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

export const useCriptoQuery = () => useContext(CriptoQueryContext);
