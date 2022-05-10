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

  const bubbleSort = () => {
    const bars = document.getElementsByClassName('visual-bar');

    const arr = elements;

    for(let i = 0; i < size; i++) {
      for(let j = 0; j < size - i; j++) {
        if(arr[j] > arr[j + 1]) {
          //swap
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;

          //assign
          bars[j].style.height = `${3*arr[j]}px`;
          bars[j + 1].style.height = `${3*arr[j + 1]}px`;
        }
      }
    }

    // console.log(elements)
  }

  return (
    <div>
      <input type="text" onChange={(e) => setSize(e.target.value)}></input>
      <button onClick={bubbleSort}>Bubble Sort</button>

      <div className='container'>
      {elements.map((val, idx) => (
        <div
          key={idx}
          className="visual-bar"
          style={{
            height: `${3*val}px`
          }}
        >{val}</div>
      ))}
      </div>
    </div>
  );
}

export default App;
