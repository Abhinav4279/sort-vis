// import { useEffect, useState } from 'react'
// import bubbleSort from './helper/bubbleSort'
// import Bar from './components/Bar'
// import Visualizer from './components/Visualizer'
// import './App.css';


// function App() {
//   const [size, setSize] = useState(0);
//   const [elements, setElements] = useState([]);
//   let height, bars, steps;

//   const RandGen = (min, max) => {
// 		return Math.floor(Math.random() * (max - min) + min);
// 	};

//   const operate = () => {
//     [steps, height] = bubbleSort(elements);

//     const bars = elements.map(val => 
//       <Bar key={val} val={val}/>
//     )
//   }

//   const sortVis = () => {
//     for(let i = 0; i < size - 1; i++) {
//       for(let j = 0; j < size - i - 1; j++) {
//         if(elements[j] > elements[j + 1]) {
//           // steps.push([j, j + 1]);
//           // height.push([elements[j + 1], elements[j]]);

//           // bars[j]

//           //swap
//           let tmp = elements[i];
//           elements[i] = elements[j];
//           elements[j] = tmp;
//         }
//       }
//     }
//   }

//   useEffect(() => {
//     const arr = [];
//     for(let i = 0; i < size; i++) {
//       arr.push(RandGen(20, 100))
//     }

//     setElements(arr);
//     operate();
//     sortVis();
//   }, [size]);

//   return (
//     <div>
//       <input type="text" onChange={(e) => setSize(e.target.value)}></input>
//       <button onClick={bubbleSort}></button>
//       {bars}
//     </div>
//   );
// }

// export default App;


// elements.map(val => 
//   <Bar key={val} val={val}/>
// )
















import { useEffect, useState } from 'react'
import bubbleSort from './helper/bubbleSort'
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







// import { useEffect, useState } from 'react'
// import bubbleSort from './helper/bubbleSort'
// import Bar from './components/Bar'
// import './App.css';


// function App() {
//   const [size, setSize] = useState(0);
//   const [elements, setElements] = useState([]);
//   let arr = [];

//   const RandGen = (min, max) => {
// 		return Math.floor(Math.random() * (max - min) + min);
// 	};

//   const operate = () => {

//   }

//   const sortVis = () => {

//     for(let i = 0; i < size - 1; i++) {
//       for(let j = 0; j < size - i - 1; j++) {
//         if(arr[j] > arr[j + 1]) {


//           //swap
//           let tmp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = tmp;
//         }
//       }
//     }
//   }

//   useEffect(() => {
//     for(let i = 0; i < size; i++) {
//       arr.push(RandGen(20, 100))
//     }

//     setElements(arr);
//     operate();
//   }, [size]);

//   return (
//     <div>
//       <input type="text" onChange={(e) => setSize(e.target.value)}></input>
//       <button onClick={bubbleSort}></button>
//       {elements.map((val, idx) => 
//         <Bar key={idx} val={arr[idx]}/>
//       )}
//     </div>
//   );
// }

// export default App;