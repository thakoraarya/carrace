// import React, { useState } from 'react'
import React from 'react'
import road from './assets/road.svg'
// import Cars from './Cars'
const Race = ({ cars }) => {
  const selectedCar = cars.state.selectedCar;


  return (
    <div className='bg-gradient-to-br from-green-400 to-green-700 h-screen'>
      {/* car */}
      {selectedCar ? (
        <div>
          <p>Selected car: {selectedCar.Name}</p>
        </div>
      ) : (
        <p>No car selected</p>
      )}
      {/* race track */}
      <img className='w-fit m-auto' src={road} alt="race track" />

      {/* selected cars */}
    </div>
  )
}

export default Race