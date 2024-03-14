import './App.css'
import Header from "./components/Header";
import BannerPrincipal from "./components/BannerPrincipal"
import TipBar from './components/TipBar';
import Marcas from './components/Marcas';
import Shelf from './components/Shelf';
import TextImageSection from './components/TextImageSection';
import Icons from './components/Icons/icons';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <div className="font-titillium">
        <Header />
        <BannerPrincipal />
        <TipBar />
        <Marcas />
        <Shelf />
        <TextImageSection
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque"
          imageUrl={Icons.bannerNewCollection}
          imageUrlMob={Icons.bannerNewCollectionMob}
          alt="banner new collection"
        />
        <Footer/>
      </div>
    </>
  )
}

export default App
