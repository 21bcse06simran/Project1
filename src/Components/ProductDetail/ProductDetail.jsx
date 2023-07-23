import React from 'react'
import "./ProductDetail.css"

function ProductDetail() {
  return (
    <div>
        <h3>Product Name</h3>
        <h5 className='Pline'>MRP</h5>
        <h6 className='Pline'>price inclusive all texes</h6>
        <h5 className='Pline'>Color</h5>
        
    
        <h5 className='Pline'>CHOOSE SIZE</h5>
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
        <label className="btn btn-outline-dark" htmlFor="btnradio1">28</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
        <label className="btn btn-outline-dark" htmlFor="btnradio2">30</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
        <label className="btn btn-outline-dark" htmlFor="btnradio3">32</label>
        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
        <label className="btn btn-outline-dark" htmlFor="btnradio4">38</label>
        </div>
        <br />
        <br />
        <form className="row grid  col-6 mx-auto" id='Check'>
       
        <div className="col-auto">
            <label htmlFor="inputPassword2" className="visually-hidden"></label>
            <input type="password" className="form-control" id="inputPassword2" placeholder=""/>
        </div>
        <div className="col-auto">
            <button type="submit" className="btn btn-dark mb-3">Check delivery</button>
        </div>
        </form>
        <div className="d-grid  col-6 mx-auto">
        <button className="btn btn-dark" type="button">Add to Cart</button>
        
        </div>
        <div className='dropdown'>
        <div className="btn-group">
            <button type="button" className="btn btn- dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                Left-aligned, right-aligned lg
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
            </div>
            <div className="btn-group">
            <button type="button" className="btn btn- dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                Left-aligned, right-aligned lg
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
            </div>
            <div className="btn-group">
            <button type="button" className="btn btn- dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                Left-aligned, right-aligned lg
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
            </div>
            <div className="btn-group">
            <button type="button" className="btn btn- dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                Left-aligned, right-aligned lg
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
            </div>
            </div>
            <h2 className='Pline'>You may also like this</h2>
            <div class="card-group">
            <div class="card">
                <img src="" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-body-">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card">
                <img src="" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-body-">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card">
                <img src="" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-body-">Last updated 3 mins ago</small></p>
                </div>
            </div>
            </div>
                

      
    </div>
  )
}

export default ProductDetail

