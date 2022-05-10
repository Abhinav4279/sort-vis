export default function bubbleSort(elements) {
    const size = elements.length;
    
    const steps = [];
    const height = [];
    for(let i = 0; i < size - 1; i++) {
        for(let j = 0; j < size - i - 1; j++) {
          if(elements[j] > elements[j + 1]) {
            steps.push([j, j + 1]);
            height.push([elements[j + 1], elements[j]]);

            //swap
            let tmp = elements[i];
            elements[i] = elements[j];
            elements[j] = tmp;
          }
        }
      }

      return [steps, height];
}