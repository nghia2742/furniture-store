import React from 'react'

function loading() {
  return (
    <div className='min-h-screen h-fit flex justify-center items-center'>
        <span className="loading loading-infinity w-32 bg-gradient-to-r from-pink-500 to-violet-500"></span>
    </div>
  )
}

export default loading