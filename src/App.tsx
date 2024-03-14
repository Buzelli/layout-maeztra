import './App.css'
import Header from "./components/Header";
import BannerPrincipal from "./components/BannerPrincipal"
import TipBar from './components/TipBar';
import Marcas from './components/Marcas';
import Shelf from './components/Shelf';


function App() {

  return (
    <>
      <div className="font-titillium">
        <Header/>
        <BannerPrincipal/>
        <TipBar/>
        <Marcas/>
        <Shelf/>
      </div>
    </>
  )
}

export default App
