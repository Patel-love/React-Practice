import React from 'react'
import { useParams } from 'react-router-dom'

function Profilepage() {
    const params = useParams()
  return (
    <>
    <h1>ProfilePage : {params.profileId}</h1>
    </>
  )
}

export default Profilepage