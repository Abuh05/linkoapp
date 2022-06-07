import './App.css';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Presentation from './components/Presentation';
import aboutimage from './images/Frame 19.png'
import aboutimage1 from './images/download.png'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <Header />
    <Feature />
    <About image={aboutimage} title='Çomes will All You Need For Daily Life' button='Get The App'/>
    <Presentation />
    <About image={aboutimage1} title='Download and Get App Now' button='Download'/>
    <Contact />
    </div>
  );
}

export default App;
