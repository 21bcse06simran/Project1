import React from 'react'
import "./HomeContect.css"

function HomeContect() {
  return (
    <>
     <div className="card text-bg-dark">
        <img src="./img/img1.webp" className="card-img" alt="error"/>
        <div className="card-img-overlay">
            <a style={{margin:'.50rem' , color:'white' , backgroundColor:'red' , border:'red'}} className="btn btn-primary" href="/" role="button">SHOP MAN</a>
            <a style={{margin:'.50rem' , color:'white' , backgroundColor:'red' , border:'red'}} className="btn btn-primary" href="/" role="button">SHOP WOMAN</a>
        </div>
    </div>
    <div className="card text-bg-dark">
  <img src="./img/img2.webp" className="card-img" alt="error"/>
</div>
    </>
  )
}

export default HomeContect
