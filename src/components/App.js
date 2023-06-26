import LinkList from './LinkList';
import CreateLink from './CreateLink';
import './../styles/App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Perfil from './perfil';
import Login from './Login';
import Davinci from './text-davinci-003';
import Image from './Image';
import Consulta from "./ConsultasSQL"
import MenuDropdown from './openiaServices';
import Correccion from "./CorreccionEscritura"
import Pelicula from "./PeliculasEmojis";
import Receta from "./Recetas";

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/davinci" element={<Davinci/>} />
          <Route path="/image" element={<Image/>} />
          <Route path="/consultas" element={<Consulta/>} />
          <Route path="/openia" element={<MenuDropdown/>} />
          <Route path="/correccion" element={<Correccion/>} />
          <Route path="/pelicula" element={<Pelicula/>} />
          <Route path="/receta" element={<Receta/>} />
        </Routes>
      </div>
      <img className='imgStar' alt='imgMain' src='https://photos1.blogger.com/blogger/3614/4019/1600/estrellas.jpg'/>
    </div>
  );
};

export default App;