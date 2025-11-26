import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Clientes from './Agenda/index'
import CreateCliente from './Agenda/create'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './auth/Context'
import PrivateRoute from './router/PrivateRoute'
import Atendimentos from './Atendimento/index'

function App() {

  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />

        <Route element={<PrivateRoute />}>
        
          <Route path='/clientes' element={<Clientes/>} />
          <Route path='/create/cliente' element={<CreateCliente/>} />

          <Route path='/atendimentos' element={<Atendimentos/>} />
          
        </Route>
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: '50%' }}
      />

      <Footer />
    </AuthProvider>
  )
}

export default App
