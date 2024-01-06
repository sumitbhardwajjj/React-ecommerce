import './App.css';
import Home from './components/Home';
import DetailPage from './components/DetailPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './components/Cart';

function App() {

  
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/details/:id' element={<DetailPage/>}/>
    <Route path='/cart' element={<Cart/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
