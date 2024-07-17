import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Router, Route, Outlet } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {

  function WebsiteLayout() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<WebsiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
