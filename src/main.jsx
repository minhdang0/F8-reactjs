import { React, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
        <App />
    </>
  </StrictMode>,
)


function HomePage({name, age, address}) {
  return (
    <>
      <h1>Xin chao {name}</h1>
      <h2>Mình {age} tuổi</h2>
      <h3>Mình đến từ {address}</h3>
    </>
  );
}
// Javascript xml
/**
 * JSX la Javascript XML
 * JSX khong phai la mot chuoi, Khong phai HTML ma la 1 dinhj dang 1 cu phap xay dung giao dine nguoi dung de dang hon
 * pros : properties là một đối tượng chứa nhiều thông tin
 * Component là một hàm hỗ trợ giao diện 
 */