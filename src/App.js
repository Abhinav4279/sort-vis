import { useEffect, useState } from 'react'
import './App.css';


function App() {
  const [size, setSize] = useState(0);
  const [elements, setElements] = useState([]);

  const RandGen = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

  useEffect(() => {
    const arr = [];
    for(let i = 0; i < size; i++) {
      arr.push(RandGen(20, 100))
    }

    setElements(arr);
  }, [size]);

  return (
    <div>
      <input type="text" onChange={(e) => setSize(e.target.value)}></input>

      <div>
        {
          elements.map((val) => 
            <p>val</p>
          )
        }
      </div>
    </div>
  );
}

export default App;
