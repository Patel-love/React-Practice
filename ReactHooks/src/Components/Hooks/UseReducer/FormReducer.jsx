import React,{useReducer, useState} from 'react'

const InitialValue = {
    name: "",
    email: "",
    password: "",
    number: "",
  };

function reducerFunction(prev,next) {
    console.log("Prev = ",prev);
    console.log("Next = ",next);
    
    return {...prev , ...next}
}


function FormReducer() {
    const [form,setForm] = useReducer(reducerFunction,InitialValue)

    function handlename(e) {
        setForm({name:e.target.value}) ;
    }
    function handleemail(e) {
        setForm({email:e.target.value}) ;
        
    }
    function handlepassword(e) {
        setForm({password:e.target.value}) ;
        
    }
    function handlenumber(e) {
        setForm({number:e.target.value}) ;
        
    }
    
    function handlesubmit(e) {
        console.log("Form Submitted ",{form});
        
    }
    
  return (
    <>
 <div className="container p-5 text-bg-dark mb-5">
        <h1 className="text-center">
          <b>
            <i>Use Reducer</i>
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
  )
}

export default FormReducer