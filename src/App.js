import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import CourseDetails from './Courses/CourseDetails';
import Footer from './Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Instructor from './components/Instructor/Instructor';
import Contact from './Contact/Contact';

function App() {
  return (
    <Router>
      <div className="bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
