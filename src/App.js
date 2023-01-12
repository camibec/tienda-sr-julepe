import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element= {<ItemListContainer greeting='¡Te damos la bienvenida a nuestra tienda! Estos son nuestros productos'/>}/>
            <Route path='/detail/:productId' element= {<ItemDetailContainer/>}/>
            <Route path='/category/:categoryId' element= {<ItemListContainer greeting='¡Te damos la bienvenida a nuestra tienda! Te mostramos todos los productos de esta categoria ' />}/>
          </Routes>
          
          {/* <footer>*/ }
        </BrowserRouter>
        
      {/*</header>*/}
    </div>
  );
}

export default App;
