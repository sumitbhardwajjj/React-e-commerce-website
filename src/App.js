
import './App.css'
import Header from './component/Header';
import Home from './component/home/Home';
import Product from './component/Products/Products';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductLists from './component/Products/ProductList';
import DetailViews from './component/DetailView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Product/>}>
        <Route path='lists' element={<ProductLists/>}/>
        <Route path='lists/:id' element={<DetailViews/>}/>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
