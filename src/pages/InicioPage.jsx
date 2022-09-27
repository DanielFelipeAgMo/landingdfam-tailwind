import { MyCard } from "../components/MyCard";
import { proyectos } from "../database/proyectos";
import { PerfilPage } from "./PerfilPage";
import Daniel from "../assets/img/daniel.jpg"



export const InicioPage = () => {
  const boton =()=>{
    return <PerfilPage/>   
  }
  return (
    <div className="h-screen bg-cover w-full" style={{backgroundImage: 'url("https://thumbs.dreamstime.com/b/opini%C3%B3n-del-hojeador-del-c%C3%B3digo-del-html-del-web-site-sobre-el-fondo-blanco-24331527.jpg")'}}>
        <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
          <div className="max-w-2xl text-center">            
            <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-black lg:text-7xl">Daniel Agudelo</h1>
            <p className="mt-6 lg:text-lg text-black">Ahora que estás aquí y que verás algunos de mis trabajos, te invito a que sepas un poco mas de quién soy..</p>
            <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">             
            
               <img className="rounded-full w-32 mb-4 mx-auto" src={Daniel}></img>
                           
            </div>
          </div>
        </div>
    </div>
    
  );
};
