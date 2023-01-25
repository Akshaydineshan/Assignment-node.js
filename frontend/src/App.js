
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Authentification/Login';
import Register from './components/Authentification/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Update from './components/Home/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes >

          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/" element={<Home></Home>} />
          <Route path="/update/:id" element={<Update></Update>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
