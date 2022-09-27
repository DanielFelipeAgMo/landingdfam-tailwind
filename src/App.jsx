import Navbar from "./components/Navbar";
import { InicioPage } from "./pages/InicioPage";
import { PerfilPage } from "./pages/PerfilPage";
import { EstudiosPage } from "./pages/EstudiosPage";
import { ExperienciaPage } from "./pages/ExperienciaPage";
import { PortafolioPage } from "./pages/PortafolioPage";
import { ContactoPage } from "./pages/ContactoPage";
import Footer from "./components/Footer";
import { MyCard } from "./components/MyCard";

function App() {
  return (
    <>
      <Navbar />
      <section id="inicio">
        <InicioPage />
      </section>
      <section id="perfil">
        <PerfilPage />
      </section>
      <section id="estudios">
        <EstudiosPage />
      </section>
      <section id="experiencia">
        <MyCard />
      </section>
      <section id="portafolio">
        <PortafolioPage />
      </section>
      <section id="contacto">
        <ContactoPage />
      </section>
      <Footer />
    </>
  );
}

export default App;
