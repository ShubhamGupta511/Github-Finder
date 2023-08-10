import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router } from 'react-router-dom'
import Footer from "./components/Footer";

// 1. Deal with third party API  
// 2. Dive more into the context API intead of using useState.
// 3. Explore useReducers pure fucntions used to manipulate parts of your state.


function App() {
  return (
    <Router>
     <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        <main className="container mx-auto  px-3 pb-12">Content</main>
        <Footer/>
     </div>
    </Router>
  );
}

export default App;
