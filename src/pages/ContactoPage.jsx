import React from 'react'

export const ContactoPage = () => {
  return (
    <>
    <footer className="footer w-full relative bg-blueGray-200 pt-8 pb-6">
    <div> 
    <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
            <div className="mt-6 lg:mb-0 mb-6">
        <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <i className="fab fa-gitlab" /></button>
          <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <i className="fab fa-linkedin" /></button>
          <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <i className="fab fa-youtube" /></button>
          <button  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <i className="fab fa-github" />
        </button>
      </div>
            </div>
          </div>
        </div>       
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2022</span><a href="" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Made by
              </a><a href="" className="text-blueGray-500 hover:text-blueGray-800"> DFAM Soluciones</a>.
            </div>
          </div>
        </div>
      </div>
        </footer>
    </>
  )
}
