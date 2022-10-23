import React from 'react'



const Map = () => {
  return (
    <div>
      <div className='block mb-8 sm:hidden '>
          <iframe width="320" height="320" src="https://maps.google.com/maps?q=manuyo%20uno&t=&z=13&ie=UTF8&iwloc=&output=embed">
          </iframe>
      </div>
      <div className='hidden lg:block mb-4'>
          <iframe width="550" height="480" src="https://maps.google.com/maps?q=manuyo%20uno&t=&z=13&ie=UTF8&iwloc=&output=embed">
          </iframe>
      </div>
    </div>
  )
}

export default Map