import './App.css';
import AmericanBar from './components/AmericanBar';
import WelcomeScreen from './components/WelcomeScreen';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Visa from './components/Visa';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <AmericanBar/>
      <WelcomeScreen/>
      <AboutUs/>
      <Services/>
      <Visa/>
      <Reviews/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
