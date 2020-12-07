
import './App.css';
import AppBar from './components/AppBar';
import BackgroundWeatherComponent from './components/BackgroundWeatherComponent';
import SearchComponent from './components/SearchComponent';
import WeatherInfoComponent from './components//api/WeatherInfoComponent';
import FooterComponent from './components/FooterComponent';

function App() {





  return (
    <div className="background">
   
      <BackgroundWeatherComponent />
      <SearchComponent />
      <WeatherInfoComponent location="Parma" unit="F" />
       <FooterComponent />
   
    </div>
  );
}

export default App;
