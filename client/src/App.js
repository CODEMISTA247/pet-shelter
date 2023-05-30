
import { useState } from 'react'
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom'
import DisplayAllPets from './components/DisplayAllPets';
import PetForm from './components/PetForm';
import OnePet from './components/OnePet';
import Edit from './components/Edit'
import './App.css';

function App() {

  const [allPets, setAllPets] = useState([])
  return (
    <div className="App bg-secondary">
        <Nav />
        <Routes>
        <Route path='/' element= {<DisplayAllPets allPets={allPets} setAllPets={setAllPets}/>}/>
        
        <Route path='/editPet/:id' element={<Edit />} />
        
        <Route path='/petForm' element={<PetForm allPets={allPets} setAllPets={setAllPets}/>}/> 
        
        <Route path='/onePet/:id' element={<OnePet /> } />
        </Routes>
        
    </div>
  );
}

export default App;
