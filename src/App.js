import logo from './logo.svg';
import './App.css';
import Homescreen from './Screen/Homescreen/Homescreen';
import { Route,Routes } from 'react-router-dom';
import Projectdetail from './Screen/Homescreen/Projectdetail/Projectdetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Homescreen/>}/>
        <Route path='/project/:id' element={<Projectdetail/>}/>
        
    
      </Routes>
    </div>
  );
}

export default App;
