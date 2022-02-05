import React,{ useState, useEffect } from 'react';
import hyoga from '../images/Hyoga.jpg';

export const CounterApp = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {

    const img = document.getElementById('hyoga-img');

    if (count >= 100) {
      img.classList.remove('Inactive');
      img.classList.add('Active')
    } else {
      img.classList.remove('Active');
      img.classList.add('Inactive')
    }
  },[count]);  

  const handleShowCount = (e) => {

    if (e.target.id === 'btnAdd') {
      setCount(count + 10);
    } else {
      setCount(count - 10);
    }
  }
  
  return(
    <div>
      <h1>CounterApp</h1>
      <hr />
      <p>{count}</p>
      <figure>
        <img className="" id="hyoga-img" src={hyoga} alt="Imagen de prueba"/>
      </figure>
      <button id="btnAdd" onClick={handleShowCount}>+</button>    
      <button id="btnSubstract" onClick={handleShowCount}>-</button>    
    </div>
  );
};
