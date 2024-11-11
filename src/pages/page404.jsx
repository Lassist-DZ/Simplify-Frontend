import React from 'react'
const Page404 = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h4 className="text-xl font-semibold mb-2">Oops! You{"'"}re lost.</h4>
        <p className="text-gray-600 mb-6">
          The page you are looking for was not found.
        </p>
      </div>
    </div>
  )
}

export default Page404
