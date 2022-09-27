import React from 'react'
import Sena from '../assets/img/logosena.png'
import Uis from '../assets/img/logouis.png'
import Esumer from '../assets/img/logoesumer.png'
import Fucn from '../assets/img/logofucn.png'
import Poli from '../assets/img/logopolicol.png'
import Udea from '../assets/img/logoudea.png'
import Fimlm from '../assets/img/logofmlm.png'
import Diploma from '../assets/img/diploma.jpg'

export const EstudiosPage = () => {
  return (
   <>
   <div className="grid gap-12 lg:grid-cols-1 w-full">
      <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        <img
          src={Diploma}
          alt="art cover"
          loading="lazy"
          className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
          width={1000}
          height={1000}
        />
        <div className="sm:w-7/12 pl-0 p-5">
          <div className="space-y-2">
            <div className="space-y-4">
              <h2 className="text-2xl text-center font-semibold text-cyan-900">
                Formación Profesional
              </h2>
              
              <div id="main" class="m-8 grid grid-cols-4 gap-1 justify-evenly">
                <div className="text-center">
                <img src={Uis} className="rounded-full w-32 mb-4 mx-auto" alt="Avatar" />
                <h5 className="text-xl font-medium leading-tight mb-2">Esp.Software</h5>
                <p className="text-gray-500">UIS</p>
                </div> 

                <div className="text-center">
                <img src={Fucn} className="rounded-full w-32 mb-4 mx-auto" alt="Avatar" />
                <h5 className="text-xl font-medium leading-tight mb-2">Ing.Informático</h5>
                <p className="text-gray-500">FUCN</p>
              </div>

              <div className="text-center">
                <img src={Esumer} className="rounded-full w-32 mb-4 mx-auto" alt="Avatar" />
                <h5 className="text-xl font-medium leading-tight mb-2">Adm. Financiera</h5>
                <p className="text-gray-500">ESUMER</p>
              </div> 

              <div className="text-center">
                <img src={Sena} className="rounded-full w-32 mb-4 mx-auto" alt="Avatar" />
                <h5 className="text-xl font-medium leading-tight mb-2">Tg.Desarollo Software</h5>
                <p className="text-gray-500">SENA</p>
                </div>
              </div>

              <div id="main" class="m-8 grid grid-cols-4 gap-1 justify-evenly">
                <div className="text-center">
                <img src={Sena} className="rounded-full w-32 mb-4 mx-auto" alt="Avatar" />
                <h5 className="text-xl font-medium leading-tight mb-2">Tc.Gestión Finaciera</h5>
                <p className="text-gray-500">SENA</p>
                </div> 

                <div className="text-center">
                <img src={Udea} className="rounded-full w-32 mb-4 mx-auto" alt="Avatar" />
                <h5 className="text-xl font-medium leading-tight mb-2">Full Stack Python</h5>
                <p className="text-gray-500">U de A</p>
              </div>

              <div className="text-center">
                <img src={Poli} className="rounded-full w-32 mb-4 mx-auto" alt="Avatar" />
                <h5 className="text-xl font-medium leading-tight mb-2">Backend PHP,Java</h5>
                <p className="text-gray-500">Pol.Colombia</p>
              </div> 

              <div className="text-center">
                <img src={Fimlm} className="rounded-full w-32 mb-4 mx-auto" alt="Avatar" />
                <h5 className="text-xl font-medium leading-tight mb-2">Dip.React Js</h5>
                <p className="text-gray-500">FMLM</p>
              </div>
              </div>             
              
          
            </div>
            
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
