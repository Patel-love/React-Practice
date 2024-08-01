import React from 'react'
import GetImageUrl from './GetImageUrl'; 


function Common({image,name,profession,award,dis,count}) {
  return (
    <>
    <div>
      <section className="profile m-auto bg-primary-subtle w-75 text-center h-100">
        <h2>{name}</h2>
        <hr />
        <img
          className="avatar "
          src={GetImageUrl(image)}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <hr />
        <ul >
          <li className='p-2'>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {count} </b> 
          {award}
          </li>
          <li className='p-4'>
            <b>Discovered: </b>
            {dis}
          </li>
        </ul>
      </section>
      </div>
      </>
  )
}

export default Common