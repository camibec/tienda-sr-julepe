import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Navbar/>
      <ItemListContainer greeting='¡Te damos la bienvenida a nuestra tienda!'/>
      
      </header>
    </div>
  );
}

export default App;
