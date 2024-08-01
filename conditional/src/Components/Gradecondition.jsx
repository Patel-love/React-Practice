import React from "react";
import Grade from "./Grade";

function Gradecondition() {
  var marks = 98;

  if (marks <= 100 && marks >= 90) {
    return <Grade mark={marks} gra="A" />;
  } else if (marks >= 80 && marks < 90) {
    return <Grade mark={marks} gra="B" />;
  } else if (marks >= 70 && marks < 80) {
    return <Grade mark={marks} gra="C" />;
  } else if (marks < 70 && marks > 35) {
    return <Grade mark={marks} gra="D" />;
  } else if (marks > 100 || marks < 0) {
    return alert("Invalid Marks");
  } else {
    return <Grade mark={marks} gra="Fail" />;
  }

  //   return (
  //     <>

  //     </>
  //   )
}

export default Gradecondition;
