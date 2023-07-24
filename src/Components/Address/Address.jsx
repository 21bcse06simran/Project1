import React from 'react'

function Address() {
  return (
    <div>
        <h1>HIT-BLUNDERS</h1>
        <hr />
        <hr />
        <h5>SHIPPING ADDRESS</h5>
        <form className="row g-3 needs-validation" novalidate>
            <div className="col-md-4">
                <label htmlhtmlFor="validationCustom01" className="htmlForm-label">First name</label>
                <input type="text" className="htmlForm-control" id="validationCustom01" value="Mark" required/>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-md-4">
                <label htmlhtmlFor="validationCustom02" className="htmlForm-label">Last name</label>
                <input type="text" className="htmlForm-control" id="validationCustom02" value="Otto" required/>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-md-4">
                <label htmlhtmlFor="validationCustomUsername" className="htmlForm-label">Username</label>
                <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" className="htmlForm-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                <div className="invalid-feedback">
                    Please choose a username.
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <label htmlhtmlFor="validationCustom03" className="htmlForm-label">City</label>
                <input type="text" className="htmlForm-control" id="validationCustom03" required/>
                <div className="invalid-feedback">
                Please provide a valid city.
                </div>
            </div>
            <div className="col-md-3">
                <label htmlhtmlFor="validationCustom04" className="htmlForm-label">State</label>
                <select className="htmlForm-select" id="validationCustom04" required>
                <option selected disabled value="">Choose...</option>
                <option>...</option>
                </select>
                <div className="invalid-feedback">
                Please select a valid state.
                </div>
            </div>
            <div className="col-md-3">
                <label htmlhtmlFor="validationCustom05" className="htmlForm-label">Zip</label>
                <input type="text" className="htmlForm-control" id="validationCustom05" required/>
                <div className="invalid-feedback">
                Please provide a valid zip.
                </div>
            </div>
            {/* <div>
            <label htmlFor="inputPassword5" className="form-label">Address</label>
                <input type="text" className="form-control" aria-labelledby="passwordHelpBlock"/>
                
            </div>
            <div>
            <label htmlFor="inputPassword5" className="form-label">phone</label>
                <input type="text"  className="form-control" aria-labelledby="passwordHelpBlock"/>
                
            </div> */}

            
            <div className="col-12">
                <div className="htmlForm-check">
                <input className="htmlForm-check-input" type="checkbox" value="" id="invalidCheck" required/>
                <label className="htmlForm-check-label" htmlhtmlFor="invalidCheck">
                    Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                    You must agree behtmlFore submitting.
                </div>
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-dark" type="submit">Continue To shoping</button>
            </div>
            </form>
      
    </div>
  )
}

export default Address
