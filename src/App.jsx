
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Navbar from "./components/Navbar"

function App() {

  return (
   <BrowserRouter>

   <Navbar/>
   
   <Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/blog" element={<Blog/>}/>

   </Routes>
   </BrowserRouter>
   
  )
}

export default App
