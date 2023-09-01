
import './App.css'
import { ProyectRoutes } from 'routes/ProyectRoutes'
import { MainProvider } from 'context/MainProvider'
import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'


function App() {

  return (
    <MainProvider>
    <ProyectRoutes/>
    </MainProvider>
  )
}

export default App
