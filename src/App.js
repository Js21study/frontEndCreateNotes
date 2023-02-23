import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Create from './components/Create';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Note from './components/Note';



function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
              <Route  exact path='/' element={<Home/>} />
              <Route  path='/about' element={<About/>} />
              <Route  path='/create' element={<Create/>} />
              <Route  exact path='/note/' element={<Note/>} />
              <Route  exact path='/note/:noteURL' element={<Note/>} />
              <Route  path='*' element={<Error/>} />
        </Routes>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
