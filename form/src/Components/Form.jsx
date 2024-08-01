import React, { useState } from "react";

function Form() {

  const [{firstname}, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");


  function handlefirst(e) {
    setfirstname(e.target.value)
  }
  function handlesecond(e) {
    setlastname(e.target.value)
  }





  return (
    <>
      <div className="container ">
        <h1 className="text-center">
          <i>Form</i>
        </h1>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={firstname}
              onChange={handlefirst}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={lastname}
              onChange={handlesecond}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <div className="  border border-4 border-primary-subtle my-5 py-4 fs-3">
            User Name is {firstname} {lastname}
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
