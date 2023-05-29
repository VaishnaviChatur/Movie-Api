import './App.css';
import { Routes, Route} from 'react-router-dom'
import Home from './Componantes/pages/Home'
import Cart from './Componantes/pages/Cart'
import NavBar from './Componantes/NavBar/NavBar';
import { Provider } from 'react-redux';
import store from './Componantes/store/store'


function App() {
 
  return (
    <>
     
    <Provider store = { store }>
     <NavBar />
      <Routes>
        <Route path = '/' element={<Home />}></Route>
        <Route path = '/cart' element={<Cart />}></Route>
      </Routes>
      </Provider>
   
     
    
    
    </>
    
  );
}

export default App;
