import React from 'react';

function Grid() {
  return <div className='container-fluid'>


<div className="row g-4">
  <div className="col-sm-2">
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>


<form>
  <div className="row mb-1 mt-2">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-1 col-form-label">Password</label>
    <div className="col-sm-2">
      <input type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 ">Radios</legend>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
        <label className="form-check-label" for="gridRadios1">
          First radio
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label className="form-check-label" for="gridRadios2">
          Second radio
        </label>
      </div>
      <div className="form-check disabled">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
        <label className="form-check-label" for="gridRadios3">
          Third disabled radio
        </label>
      </div>
    </div>
  </fieldset>
  <div className="row mb-3">
    <div className="col-sm-10 ">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <div className='row'>
   <div className='col'></div> 
   <div className='col-md-2'>
   <input type="password" className="form-control" id="inputPassword3"/>
     
     
     </div> 
   <div className='col'></div> 

  </div>
</form>
<div className="row g-2">
  <div className="col-sm-7">
    <input type="text" className="form-control" placeholder="City" aria-label="City"/>
  </div>
  <div class="col-sm">
    <input type="text" className="form-control" placeholder="State" aria-label="State"/>
  </div>
  <div class="col-sm">
    <input type="text" className="form-control" placeholder="Zip" aria-label="Zip"/>
  </div>
</div>
  </div>;
}

export default Grid;
