
import Navbar from './components/navbar/Navbar';
import Home from './screens/home/home.screen';
import About from './screens/about/about.screen';
import Skills from './screens/skills/skills.screen';
import Work from './screens/work/work.screen';
import Contact from './screens/contact/contact.screen';
import Footer from './components/footer/footer';

function App () { 
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer/>
    </div>
  );
}
export default App;

