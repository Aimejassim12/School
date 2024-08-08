import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from'./Project/Home'
import About from './Project/About'
import Contact from './Project/Contact'
import Header from './Project/Header'
import Footer from './Project/Footer'
function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
       <p>
    A.P.A.E.R INSTITE 
  </p>
  <Header/>
    <div className="container mx-auto p-4">
    <Routes>
      <Route path='/home'element={<Home/>}/>
      <Route path='/About'element={<About/>}/>
      <Route path='/Contact'element={<Contact/>}/>
    </Routes>
    </div>
    </Router> 


  )
}
export default App
