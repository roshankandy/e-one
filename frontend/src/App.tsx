import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import TermAndCondition from "./pages/TermAndCondition"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/about-us" element={<AboutUs/>}> </Route>
          <Route path="/services" element={<Services/>}> </Route>
          <Route path="/contact" element={<Contact/>}> </Route>
          <Route path="/term-and-condition" element={<TermAndCondition/>}> </Route>
        </Routes>
    </BrowserRouter>            
    </div>
  )
}

export default App

