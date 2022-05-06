
import './App.css';
import  Navbar1 from './compnents/navbar/navbar';
import Carte from './compnents/carte/carte';
import {Arr} from './compnents/data/data';
function App() {
  return (
    <div className="App">
     < Navbar1/> 
    <Carte  MyCustumCard={Arr} />
    </div>
  );
}

export default App;
