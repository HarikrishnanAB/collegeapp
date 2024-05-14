import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Title from './components/Title';

function App() {
  return (
    <div >
      <Title/>
      <Home/>
      <Aboutus/>
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;
