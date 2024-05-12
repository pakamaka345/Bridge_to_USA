import './App.css';
import AmericanBar from './components/AmericanBar';
import WelcomeScreen from './components/WelcomeScreen';
import ShortServiceDescription from './components/ServiceDescription';

function App() {
  return (
    <div className="App">
      <AmericanBar/>
      <WelcomeScreen/>
      <ShortServiceDescription/>
    </div>
  );
}

export default App;
