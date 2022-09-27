import React from 'react'

export const ExperienciaPage = (url, titulo, descripcion, url_preview, url_github) => {
  return (
    <> <div className="flex justify-center">
    <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <a href={url}>
        <img className="rounded-t-lg" src={url} alt="" />
      </a>
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{titulo}</h5>
        <p className="text-gray-700 text-base mb-4"> {descripcion}        
        </p>
        <div className="flex items-center justify-center space-x-4" role="group">
        <button href={url_preview} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Vista Previa</button>
        <button href={url_github}type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Código</button>
      </div>
    </div>
    </div>
  </div></>
  )
}
