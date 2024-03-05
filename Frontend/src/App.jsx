
import { Route, Routes } from "react-router-dom";
import {Home} from './Component/Home/Home.jsx'
import {About} from './Component/About/About.jsx'
import {Navbar} from './Component/Navbar/Navbar.jsx'

function App() {

  return (
    <>
 
 <Routes>
         <Route path="/" element={<Navbar/>} />
          
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
         </Routes>
     </>
  )
}

export default App
