import LinkList from './LinkList';
import CreateLink from './CreateLink';
import './../styles/App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Perfil from './perfil';

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
        </Routes>
      </div>
      <img className='imgStar' alt='imgMain' src='https://photos1.blogger.com/blogger/3614/4019/1600/estrellas.jpg'/>
    </div>
  );
};

export default App;