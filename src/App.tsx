import './App.css'
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Register, Profile, ProductNew, ProductEdit } from './pages'
import AppProvider from './provider/AppProvider'
import Product from './pages/Product'

function App() {
  
  
  return (

      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path='/login' element={<Login />} /> 
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Product />} />
            <Route path='/add' element={<ProductNew />} />
            <Route path='/edit/:id' element={<ProductEdit />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>

  )
}

export default App

