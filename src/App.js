
import './App.css';
import AppBar from './components/AppBar';
import BackgroundWeatherComponent from './components/BackgroundWeatherComponent';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <div className="background">
      <AppBar />
      <SearchComponent />
      <BackgroundWeatherComponent />
      
    </div>
  );
}

export default App;
