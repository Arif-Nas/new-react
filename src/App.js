import React, { useState, useRef, useEffect } from 'react';
import './App.css';

import LineChart from './Components/LineChart';

const App = () => {
  const [animals, setAnimals] = useState(['animal1', 'animal2'])
  return(
    <>
    <div>
      <LineChart animals={animals} />
    </div>
    <button>Dogs</button> <button>Cats</button> 
    <button>Bird</button> <button>Rabbit</button>
    <button>Reptile</button> <button>Small Mammal</button>
    <button>Equine</button> <button>Livestock</button>
    <button>Wildlife</button>

    </> 
  )
}

export default App;
