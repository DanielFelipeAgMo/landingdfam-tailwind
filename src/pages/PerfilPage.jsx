import React from 'react'
import Daniel from "../assets/img/daniel1.jpg"

export const PerfilPage = () => {
  return (
    <>
    
    <div className="grid gap-12 lg:grid-cols-1 w-full">
      <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        <img
          src={Daniel}
          alt="art cover"
          loading="lazy"
          className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-full transition duration-500 group-hover:rounded-xl"
          width={1000}
          height={1000}
        />
        <div className="sm:w-7/12 pl-0 p-5">
          <div className="space-y-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-900">
                Daniel Felipe Agudelo Molina.
              </h2>
              <p className="text-gray-600">
                Laborum saepe laudantium in, voluptates ex placeat quo harum
                aliquam totam, doloribus eum impedit atque! Temporibus...
              </p>
            </div>
            <a href="www.tailus.io" className="block w-max text-cyan-600">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
