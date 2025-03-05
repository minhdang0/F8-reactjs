import { Route, Routes } from 'react-router-dom';
import './App.css'
import Button from './components/common/Button';
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';


function App() {
  
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} /> 
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/product-detail/:id' element={<ProductDetail />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App

