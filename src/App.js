import './App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/SearchBar/Searchbar';
import Slider from './components/Slider/Slider';
import CardGallery from './Pages/CardGallery';
import RecipeState from './context/RecipeState';
import Abt from './About'
import Con from './Contact'
function App() {
  return (
    <>
      <RecipeState>
        <Navbar />
        <Slider />
        <Searchbar />
        <CardGallery />
      </RecipeState>

  <Abt>
    <div id="About"></div></Abt> 
      
      <Con></Con>
    </>
  );
}

export default App;
