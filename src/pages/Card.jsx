import React from 'react'

const Card = () => {
  return (
    <>
      {proyectos.map((proyecto) => (
        <MyCard
          key={proyecto.id}
          url={proyecto.url}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
          url_preview={proyecto.url_preview}
          url_github={proyecto.url_github}
        />
      ))}
    </>
  )
}

export default Card