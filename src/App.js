import './App.css';
import Header from "./components/Header/Header.jsx";
import Introduction from './components/Introduction/Introduction.jsx';
import ChooseUs from './components/ChooseUs/ChooseUs.jsx';
import Intrest from './components/Intrest/Intrest.jsx';
import SwiperComponent from './components/SwiperComponent/SwiperComponent.jsx';

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <ChooseUs />
      <Intrest />
      <SwiperComponent />
    </div>
  );
}

export default App;
