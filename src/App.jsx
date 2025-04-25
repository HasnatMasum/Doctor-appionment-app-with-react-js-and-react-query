import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import MyAppionments from "./pages/MyAppionments";
import Appionment from "./pages/Appionment";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <div className="mx-5 sm:mx-[10%] pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-appionments" element={<MyAppionments />} />
          <Route path="/appionment/:docId" element={<Appionment />} />
        </Routes>
        Footer
      </div>
    </div>
  );
}

export default App;
