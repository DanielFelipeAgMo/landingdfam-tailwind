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
              <h1 className="text-6xl font-bold text-cyan-900">
                !Hola¡...                
              </h1>
              <h2 className='text-5xl font-bold text-cyan-800'>
              ...soy Daniel Felipe Agudelo Molina.
              </h2>
              <p className="text-4xl  text-gray-600 font-semibold">
                Me alegra mucho que estés de visita por mi sitio web.

                Desde que inicié mi formación profesional he venido trabajando en un proyecto empresa el cuál ha ido tomando forma de acuerdo al avance de mis habilidades y conocimientos, por medio del cuál pretendo crear un socio tecnológico en soluciones informáticas para pequeñas y medianas empresas igualmente para personas naturales emprendedores.
              </p>
              <p className="text-4xl  text-gray-600 font-semibold">
                Por eso te invito a que conozcas un poco de mi y de las cosas que puedo hacer.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
