
import './App.css';
import Navigation from './components/Navigation';
import NewTweet from './components/NewTweet';
import Tweet from './components/Tweet';

function App() {
  return (
    <div className="App">
     <Navigation/> 
     <Tweet/>
     <NewTweet />
    </div>
  );
}

export default App;
