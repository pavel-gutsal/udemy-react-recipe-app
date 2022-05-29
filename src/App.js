import {Routes , Route } from 'react-router-dom';

//page component
import Navigation from './pages/Navigation/Navigation';
import Create from './pages/Create/Create';
import Home from './pages/Home/Home';
import Recipe from './pages/Recipe/Recipe';
import Search from './pages/Search/Search';

//styles
import './App.css';

function App() {
  return (
    //!!!!!!!!!!!   might be non operational !!!!!!!
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/recipe/:id' element={<Recipe/>}/>
        </Route>
      </Routes>
  );
}

export default App;
