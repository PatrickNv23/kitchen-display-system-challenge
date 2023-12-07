import './App.css'
import { OrderList } from './components/OrderList'
import { GeneralContainer, Title } from './globalStyles'

function App() {
  return (
    <GeneralContainer>
      <Title>Kitchen Display System</Title>
      <OrderList />
    </GeneralContainer>
  )
}

export default App
