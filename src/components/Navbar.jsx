import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo-daniel.png"


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-yellow-450 mb-3 fixed w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <img src={Logo} alt="logodfamsoluciones" height="80" width="80"/> 
            
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link smooth spy to="inicio">
                <span className="ml-2 text-black text-xl">Inicio</span>
              </Link>
              <Link smooth spy to="perfil">
              <i className="fa-solid fa-person"></i>
                <span className="ml-2 text-black text-xl">Perfil</span>
              </Link>
              <Link smooth spy to="estudios">
              <i className="fa-solid fa-book"></i>
                <span className="ml-2 text-black text-xl">Formación</span>
              </Link>
              <Link smooth spy to="experiencia">
              <i className="fa-solid fa-tools"></i>
                <span className="ml-2 text-black text-xl">Experiencia</span>
              </Link>
              <Link smooth spy to="portafolio">
              <i className="fa-solid fa-code"></i>
                <span className="ml-2 text-black text-xl">Portafolio</span>
              </Link>
              <Link smooth spy to="contacto">
              <i className="fa-solid fa-address-card"></i>
                <span className="ml-2 text-black text-xl">Contacto</span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
