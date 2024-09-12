import React, { useState } from "react";
// import FormState from "./Components/Hooks/UseState/FormState";
// import FormReducer from "./Components/Hooks/UseReducer/FormReducer";
import NavbarContext from "./Components/Hooks/UseConText/NavbarContext";
import ParentContext from "./Components/Hooks/UseConText/ParentContext";
// import NameComponent from "./Components/Hooks/UseMemo/NameComponent";
// import MarkComponent from "./Components/Hooks/UseMemo/MarkComponent";
// import StudentResult from "./Components/Hooks/UseMemo/StudentResult";
// import CounterCallback from "./Components/Hooks/UseCallBack/CounterCallback";

function App() {
  // const [count, setCount] = useState(1);
  return (
    <>
      {/*--------------- UseReducer ------------------- */}

      {/* <FormReducer /> */}

      {/*--------------- UseState ------------------- */}

      {/* <FormState /> */}

      {/*--------------- UseContext ------------------- */}

      <NavbarContext />
      <ParentContext />
      <div className="container text-bg-success text-center p-3 mt-5">
        <div className="h1">Count : {count}</div>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>

      {/*---------------UseCallback-----------------  */}

      {/* <CounterCallback /> */}

      {/*--------------- UseMemo ------------------- */}

      {/* <div className="container text-bg-danger p-4 text-center">
        <NameComponent name={"MANAV"} />
        <MarkComponent marks={99} />
      </div>
      <div className="container text-bg-dark p-5 text-center">

      <StudentResult  name={"Rohan"} subject={"Hindi"} marks={80}/>
      </div> */}
    </>
  );
}

export default App;
