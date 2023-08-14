import "./App.css";
import Alert from "./components/layout/Alert";
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Navbar from "./components/layout/Navbar";
import { GithubProvider } from "./components/context/github/GithubContext";
import { AlertProvider } from "./components/context/alert/AlertContext";
// 1. Deal with third party API  
// 2. Dive more into the context API intead of using useState.
// 3. Explore useReducers pure fucntions used to manipulate parts of your state.


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
     <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        <main className="container mx-auto  px-3 pb-12">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/Notfound' element={<NotFound/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
     </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
