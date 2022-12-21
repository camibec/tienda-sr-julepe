import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Navbar/>
      <ItemListContainer greeting='¡Bienvenidos a nuestra tienda! Encontra todo para tu mascota'/>
      
      </header>
    </div>
  );
}

export default App;
