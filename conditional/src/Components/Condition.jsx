import React from "react";
import Drive from "./Drive";

function Condition() {
  const ans = 20;
//   if (ans > 18) {
//     return <Drive age={ans} allow="Can" />;
//   } else {
//     return <Drive age={ans} allow="Can't" />;
//   }

    return (
      <>
    {/* Ternary operator  */}
    {/* <Drive age={ans} allow={ ans>18 ? "Can" : "Can't"} /> */}

        {/* Ternary operator  */}
    <Drive age={ans} allow={ans > 18 ? (<b><i>"can"</i></b>) : (<b><i>"can't"</i></b>)}/>

      </>
    )
}

export default Condition;
