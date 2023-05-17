import { QueryClient, QueryClientProvider } from 'react-query'
import NavBar from './components/NavBar'
import { useState } from 'react'
import Dashboard from './components/Dashboard'

function App() {
  const [currency, setCurrency] = useState('USD')
  const queryClient = new QueryClient()

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar handleCurrencyChange={handleCurrencyChange} />
      <Dashboard currency={currency} />
    </QueryClientProvider>
  )
}

export default App
