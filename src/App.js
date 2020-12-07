
import './App.css';
import AppBar from './components/AppBar';
import BackgroundWeatherComponent from './components/BackgroundWeatherComponent';
import SearchComponent from './components/SearchComponent';
import WeatherInfoComponent from './components//api/WeatherInfoComponent';

function App() {





  return (
    <div className="background">
   
      <BackgroundWeatherComponent />
      <WeatherInfoComponent location="Parma" unit="F" />
     
    </div>
  );
}

export default App;
