import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/footer/Footer';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navigation/NavigationBar';
import MapPage from './pages/MapPage';
import Forecast from './pages/Forecast';
import TreeCount from './pages/TreeCount';


function App() {
  return (
    <div className="App">
      {/* Agrega el componente NavigationBar */}
      
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/treeCount" element={<TreeCount />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
      <Footer />

      {/* Agrega el componente Footer */}
      
    </div>
  );
}

export default App;
