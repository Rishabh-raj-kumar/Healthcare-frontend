import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Photo from "./components/Photo"
import Login from './components/Login'
import Capture from "./components/Capture"
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/photos/upload" element={<Photo/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/photos/capture" element={<Capture/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
