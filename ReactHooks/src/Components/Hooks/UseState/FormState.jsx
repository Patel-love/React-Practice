import React, { useState } from "react";

const InitialValue = {
  name: "",
  email: "",
  password: "",
  number: "",
};

function FormState() {
  const [form, setForm] = useState(InitialValue);

function handlename(e) {
    setForm({...form,name:e.target.value}) ;
}
function handleemail(e) {
    setForm({...form,email:e.target.value}) ;
    
}
function handlepassword(e) {
    setForm({...form,password:e.target.value}) ;
    
}
function handlenumber(e) {
    setForm({...form,number:e.target.value}) ;
    
}

function handlesubmit(e) {
    console.log("Form Submitted ",{form});
    
}


  return (
    <>
      <div className="container p-5 text-bg-dark">
        <h1 className="text-center">
          <b>
            <i>Use State</i>
          </b>
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="form-control my-4"
          value={form.name}
          onInput={handlename}
        />

        <input
          type="emil"
          placeholder="Enter Email"
          className="form-control my-4"
          value={form.email}
          onInput={handleemail}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="form-control my-4"
          value={form.password}
          onInput={handlepassword}
        />

        <input
          type="number"
          placeholder="Enter Number"
          className="form-control my-4"
          value={form.number}
          onInput={handlenumber}
        />

        <button className="btn btn-primary my-4" onClick={handlesubmit}>Sumbit</button>
      </div>
    </>
  );
}

export default FormState;
