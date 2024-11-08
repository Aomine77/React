import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
import Coffee from './components/coffee';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Login from './components/login';
import Signup from './components/Signup';
import AdminDashboard from './admin/AdminDashboard';
import AdminLogin from './admin/AdminLogin';


function App() {
  return (
    <Routes>
      {/* Main layout with Navbar/Footer */}
      <Route path="/" element={
        <div className="bg-white">
          <Navbar />
          <Body />
          <About />
          <Contact />
          <Footer />
        </div>
      }>
        <Route index element={
          <>
            <Body />
            <About />
            <Contact />
          </>
        } />
        <Route path="about" element={<About />} />
        <Route path="coffee" element={<Coffee />} />
        <Route path="shop" element={<Coffee />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;

function Layout({ children }) {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      
      
    </>
  );
}