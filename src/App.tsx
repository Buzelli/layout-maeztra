import './App.css'
import Header from "./components/Header";
import BannerPrincipal from "./components/BannerPrincipal"
import TipBar from './components/TipBar';


function App() {

  return (
    <>
      <div className="font-titillium">
        <Header/>
        <BannerPrincipal/>
        <TipBar/>
      </div>
    </>
  )
}

export default App
