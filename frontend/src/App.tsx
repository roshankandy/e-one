
import NavBar from "./components/NavBar";

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import TermAndCondition from "./pages/TermAndCondition";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
        <main>
        
        <div className='route-container'>
         
          <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home/>}> </Route>
                <Route path="/about-us" element={<AboutUs/>}> </Route>
                <Route path="/services" element={<Services/>}> </Route>
                <Route path="/contact" element={<Contact/>}> </Route>
                <Route path="/term-and-condition" element={<TermAndCondition/>}> </Route>
              </Routes>
          </BrowserRouter>
        </div>
      </main>
    </div>
  )
}

export default App

