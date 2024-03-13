import './App.css'
import Header from "./components/Header";
import BannerPrincipal from "./components/BannerPrincipal"
import TipBar from './components/TipBar';
import Marcas from './components/Marcas';


function App() {

  return (
    <>
      <div className="font-titillium">
        <Header/>
        <BannerPrincipal/>
        <TipBar/>
        <Marcas/>
      </div>
    </>
  )
}

export default App
