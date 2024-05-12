import './App.css';
import AmericanBar from './components/AmericanBar';
import WelcomeScreen from './components/WelcomeScreen';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <AmericanBar/>
      <WelcomeScreen/>
      <AboutUs/>
      <Services/>
      <Contacts/>
    </div>
  );
}

export default App;
