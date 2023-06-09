import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import Cart from './views/Cart';
import Home from './views/Home';
import Detail from './views/Detail';
import NotFound from './views/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <NavbarComp />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
