import React from 'react'
import Man from './Men'
import Women from './Women'

function Cardcondition() {

const user = prompt("Enter the Gender")

const users = user.toLocaleLowerCase()

// const users = "men"

    if (users==="men") {
        return <Man/>
    } else if(users==="women") {
        return <Women/>
    }else{
        alert("Invalid Gender")
    }
//   return (
//     <>
    
//     </>
//   )
}

export default Cardcondition