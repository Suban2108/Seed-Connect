// App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../src/Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import Footer from '../src/Components/Footer/Footer';
import Shop from '../src/Components/Pages/Shop';
import Cart from '../src/Components/Pages/cart';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import ContactUs from './Components/Pages/ContactUs';
import AboutUs from './Components/Pages/About';
import Connect from '../src/Components/Pages/Connect';
import Profile from '../src/Components/Pages/Profile';
import DetailedVeggiePage from './Components/DetailsPage/DetailPage';
import ProtectedLayout from './Components/ProtectedLayout'; // Import ProtectedLayout

function App() {
  return (
    <div className="App bg-zinc-900">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<DetailedVeggiePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/profile/:id" element={<Profile />} />
          {/* Protected routes for /profile and /cart */}
          <Route element={<ProtectedLayout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
