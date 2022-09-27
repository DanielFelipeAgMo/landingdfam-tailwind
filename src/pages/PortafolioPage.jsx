import React from 'react'
import wr from '../assets/img/wrobras.png'
import todolist from '../assets/img/todolist.png'
import marvel from '../assets/img/marvel.png'
import clima from '../assets/img/clima.png'
export const PortafolioPage = () => {

  const projects=[{
    id: 1,
    titulo: "WR Obras y Servicios",
    descripcion: "Landing page construida con php,html, boostrap y js",
    img:wr,
    url_preview: "https://wrobrasyservicios.com/",
    url_github: "https://github.com/DanielFelipeAgMo/obrasyservicios",
  },
  {
    id: 2,
    titulo: "App To do List",
    descripcion: "App construida con React Js, Tailwind y js",
    img: todolist,
    url_preview: "https://stellular-frangollo-104038.netlify.app/",
    url_github: "https://github.com/DanielFelipeAgMo/todo-list-tdea",
  },
  {
    id: 4,
    titulo: "Api Clima",
    descripcion: "API para la visualización del clima en diferentes ciudades con React JS",
    img: clima,
    url_preview: "https://velvety-florentine-4712cc.netlify.app/",
    url_github: "https://github.com/DanielFelipeAgMo/api-clima-react",
  },
  {
    id: 3,
    titulo: "Api Heroes",
    descripcion: "API para la visualización de los personajes de Marvel Comics con React Js",
    img: marvel,
    url_preview: "https://github.com/DanielFelipeAgMo/api-heroes-react",
    url_github: "https://github.com/DanielFelipeAgMo/api-heroes-react",
  },
]

  const listProjects = projects.map((project, index)=>( <div className="flex justify-center" key={index}>
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="">
      <img className="rounded-t-lg" src={project.img} alt={project.titulo} />
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{project.titulo}</h5>
      <p className="text-gray-700 text-base mb-4">{project.descripcion}       
      </p>
      <div className="flex items-center justify-center space-x-4" role="group">
      <a href={project.url_preview} type="button" target="_blank" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Vista Previa 👀</a>
      <a href={project.url_github} type="button" target="_blank" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Código 🔗</a>
    </div>
  </div>
  </div>
</div>))

  
  return (
    <>
   <section className="flex justify-center">
   
    <div className="flex justify-center" >
      {listProjects}
    </div>
   </section>
  
    </>
  )
}
