import React from 'react'

const Tic = () => {
  return (
    <div>
      <div className="m-4  flex justify-center p-3 mx-auto ">
      <h1 className="text-[50px] rounded-md  bg-yellow-400 text-bold hover:text-white text-center">Tic Tac Toe</h1>
    </div> 
    <div className="grid grid-cols-3  w-[500px] h-[450px]  ml-64 
     rounded-xl bg-red-900">
      <div className="bg-yellow-200 rounded-xl text-center hover:text-blue-900 text-xl py-1 m-4">0</div>
      <div className="bg-yellow-200 rounded-xl text-center hover:text-blue-900 text-xl py-1 m-4">1</div>
      <div className="bg-yellow-200 rounded-xl text-center hover:text-blue-900 text-xl py-1 m-4">2</div>
      <div className="bg-yellow-200 rounded-xl text-center hover:text-blue-900 text-xl py-1 m-4">3</div>
      <div className="bg-yellow-200 rounded-xl text-center hover:text-blue-900 text-xl py-1 m-4">4</div>
      <div className="bg-yellow-200 rounded-xl text-center hover:text-blue-900 text-xl py-1 m-4">5</div>
      <div className="bg-yellow-200 rounded-xl text-center hover:text-blue-900 text-xl py-1 m-4">6</div>
      <div className="bg-yellow-200 rounded-xl text-center hover:text-blue-900 text-xl py-1 m-4">7</div>
      <div className="bg-yellow-200 rounded-xl text-center hover:text-blue-900 text-xl py-1 m-4">8</div>
    </div> 
    </div>
  )
}

export default Tic
