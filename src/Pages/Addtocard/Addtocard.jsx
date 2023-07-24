import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Signup from '../../Components/Signup/Signup'
import Connect from '../../Components/Connect/Connect'
import Card from '../../Components/Card/Card'
import "./Addtocard.css"

function Addtocard() {
  const [arr, setArr] = useState([]);

  const getDate = () => {
    fetch("http://localhost:8081/product", {
      method: "GET",
    })
    .then((res) => res.json())
    .then((data) => {
      setArr(data);
    });
  };

  useEffect(() => {
    getDate();
  }, []); // <- Corrected the syntax here

  return (
    <div>
        
      <Navbar />
      <h1 id='cart'>ADD TO CART</h1>
      <div className='Card'>
        {arr.map((el) => {
          return (
            <div key={el.id}> {/* Added key prop for optimization */}
              <Card
                image={el.image}
                product={el.product}
                mrp={el.mrp}
                color={el.color}
                // price={el.price}
                // rating={el.rating}
              />
            </div>
          );
        })}
      </div>

      <Signup />
      <Connect />
    </div>
  )
}

export default Addtocard;
