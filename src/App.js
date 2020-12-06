
import './App.css';
import AppBar from './components/AppBar';
import BackgroundWeatherComponent from './components/BackgroundWeatherComponent';
import SearchComponent from './components/SearchComponent';
import WeatherInfoComponent from './components/WeatherInfoComponent';

function App() {





  return (
    <div className="background">
   
      <BackgroundWeatherComponent />
      <AppBar />
  <WeatherInfoComponent />
      <SearchComponent />
    
    </div>
  );
}

export default App;
