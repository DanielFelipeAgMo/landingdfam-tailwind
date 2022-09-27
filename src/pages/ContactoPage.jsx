import React from 'react'

export const ContactoPage = () => {
  const enlaces =[{
    id: 1,
    url: "https://gitlab.com/danielagudelo87",
  },
  {

  },
  {

  },
  {

  },

]

  return (
    <>
    <footer className="footer w-full relative bg-blueGray-200 pt-8 pb-6">
    <div className='text align-center'> 
    <h1 className='text-5xl font-bold text-cyan-900'> Te invito a que me contáctes por cualquiera de mis redes 💻📲📬</h1>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
            <div className="mt-6 lg:mb-0 mb-6">
        <a href='https://gitlab.com/danielagudelo87' target="_blank" className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <i className="fab fa-gitlab" /></a>
          <a href='https://www.linkedin.com/in/daniel-felipe-agudelo-molina/' target="_blank" className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <i className="fab fa-linkedin" /></a>
          <a href='https://www.youtube.com/channel/UCG470Y3lnaZqNWGlYRwm0nw' target="_blank" className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <i className="fab fa-youtube" /></a>
          <a href='https://github.com/DanielFelipeAgMo' target="_blank"  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <i className="fab fa-github" /></a>
          <a href='mailto:danielagudelo87@gmail.com' target="_blank"  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <i className="fab fa-google" /></a>
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
