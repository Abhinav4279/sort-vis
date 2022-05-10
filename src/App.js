import { useEffect, useState } from 'react'
import './App.css';


function App() {
  const [size, setSize] = useState(0);
  const [elements, setElements] = useState([]);
  var arr = [];

  const RandGen = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

  useEffect(() => {
    arr = [];
    for(let i = 0; i < size; i++) {
      arr.push(RandGen(20, 100))
    }

    setElements(arr);
  }, [size]);

  const bubbleSort = () => {
    const bars = document.querySelectorAll('.visual-bar');

    for(let i = 0; i < size; i++) {
      for(let j = 0; j < size - i; j++) {
        if(elements[j] > elements[j + 1]) {
          //swap
          let tmp = elements[j];
          elements[j] = elements[j + 1];
          elements[j + 1] = tmp;

          //assign
          bars[j].style.height = `${elements[j]}px`;
          bars[j + 1].style.height = `${elements[j + 1]}px`;
        }
      }
    }

    // console.log(elements)
  }

  return (
    <div>
      <input type="text" onChange={(e) => setSize(e.target.value)}></input>
      <button onClick={bubbleSort}></button>

      <div className='container'>
      {elements.map((val, idx) => (
        <div
          key={idx}
          className="visual-bar"
          style={{
            height: `${val}px`
          }}
        >{val}</div>
      ))}
      </div>
    </div>
  );
}

export default App;
