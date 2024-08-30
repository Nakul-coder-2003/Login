import React from 'react'
import "../style/login.css";

const Signup = () => {
  return (
    <>
    <div className="container">
      <h1>Signup</h1>
    <form className='needs-validation' novalidate>
    <div class="mb-3">
        <label for="exampleInputName" class="form-label">
          Nmae
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputNmae"
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" class="form-text">
          Please enter your full name
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
         Confirmed Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  </>
  )
}

export default Signup