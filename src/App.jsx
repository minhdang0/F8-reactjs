import './App.css'
import Button from './components/common/Button';
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage';
import Header from './layouts/Header';
import Footer from './layouts/Footer';


function App() {
  
  return (
    <>
      <div id='root'>
        <Header /> 
        <div className='container main-content'>
          <HomePage />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App

