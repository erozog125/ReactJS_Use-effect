import React,{ useState, useEffect } from 'react';
import hyoga from '../images/Hyoga.jpg';

export const CounterApp = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {

    // Cambiar tamaño a la imagen con useeffect
    const img = document.getElementById('hyoga-img');

    if (count >= 100) {
      img.style.filter = 'brightness(1)';
    }
    
  },[count]);  

  const handleShowConsole = () => {
    setCount(count+10);
  }
  
  return(
    <div>
      <h1>CounterApp</h1>
      <hr />
      <p>{count}</p>
      <figure>
        <img id="hyoga-img" src={hyoga} alt="Imagen de prueba"/>
      </figure>
      <button onClick={handleShowConsole}>Click Me</button>    
    </div>
  );
};
