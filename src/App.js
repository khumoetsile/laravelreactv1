import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Login';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import Register from './Register';
import Protected from './Protected';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/add">
        <Protected Cmp={AddProduct} />
      </Route>
      <Route path="/update">
        <Protected Cmp={UpdateProduct} />
      </Route>
      <Footer />
    </div>
    </BrowserRouter>


  );
}

export default App;
