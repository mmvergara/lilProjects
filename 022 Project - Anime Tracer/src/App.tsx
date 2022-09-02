import AnimeTracer from "./components/AnimeTracer";
import './App.css'
import Footer from "./components/Footer";
const App: React.FC = () => {

  // spinning loading crown for loading fetch and get 2 loading
  // don't upload image with sensitive information, we can't delete it.
  // more anime api's

  return (
    <div>
      <AnimeTracer/>
      <Footer/>
    </div>
  );
};

export default App;
