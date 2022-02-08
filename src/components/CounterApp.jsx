import React,{ useState, useEffect } from 'react';
import hyoga from '../images/Hyoga.jpg';

export const CounterApp = () => {

  const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const add = () => setCounter(counter + 10);
    const substract = () => setCounter(counter - 10);
    const reset = () => setCounter(0);

    return {
      counter,
      add,
      substract,
      reset
    }
    
  }
  const { counter, add, substract, reset } = useCounter();
  // const [count, setCount] = useState(0);
  useEffect(() => {

    const img = document.getElementById('hyoga-img');

    if (counter >= 100) {
      img.classList.remove('Inactive');
      img.classList.add('Active')
    } else {
      img.classList.remove('Active');
      img.classList.add('Inactive')
    }
  },[counter]);
  

  // const handleShowCount = (e) => {

  //   if (e.target.id === 'btnAdd') {
  //     setCount(count + 10);
  //   } else if (e.target.id === 'btnSubstract') {
  //     setCount(count - 10);
  //   } else if (e.target.id === 'btnReset') {
  //     setCount(0);      
  //   }
  // }

  
  return(
    <div>
      <h1>CounterApp</h1>
      <hr />
      <p>{counter}</p>
      <figure>
        <img className="" id="hyoga-img" src={hyoga} alt="Imagen de prueba"/>
      </figure>
      {/* <button id="btnAdd" onClick={handleShowCount}>+</button>    
      <button id="btnReset" onClick={handleShowCount}>Reset</button>    
      <button id="btnSubstract" onClick={handleShowCount}>-</button>     */}
      <button id="btnAdd" onClick={add}>+</button>    
      <button id="btnReset" onClick={reset}>Reset</button>    
      <button id="btnSubstract" onClick={substract}>-</button>    
    </div>
  );
};
