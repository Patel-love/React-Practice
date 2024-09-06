import React, {useMemo} from "react";

function StudentResult({ name, marks, subject }) {
    console.log("Inside StudentsResult");
    
  const percentage = useMemo( () => {
        return (marks * 100) / 100;
      }, [marks]
  );
  return (
    <>
    
    <h2>Name : {name}</h2>
      <h2>Marks : {marks}</h2>
      <h2>Percentage : {percentage} %</h2>
      <h2>Subject : {subject}</h2>
    
    </>
  )
}

export default StudentResult ;