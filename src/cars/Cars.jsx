import React, { useEffect } from 'react'
import { useState } from 'react'

function Cars(props) {
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
  
    const updateColor = () => {
      setCar(previousState => {
        if(previousState.color === 'red'){
          return { ...previousState, color: "blue" }
        }else{
          return { ...previousState, color: "red" }
        }
      });
    }


    let updateCount3 = () => {
      setTimeout(() => {
        props.setCount3((count3) => count3 + 1);
      }, 1000 );
    }
  
    return (
      <>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button
          type="button"
          onClick={()=>{
            updateColor();
            updateCount3();
          }}
        >{car.color}</button>
      </>
    )
  }
  
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(<Cars />);

export default Cars
