import Banner from "./components/banner/Banner";
import Beatiful from "./components/beatiful/Beatiful";
import Browse from "./components/browse/Browse";
import Collection from "./components/collection/Collection";
import Footer from "./components/footer/Footer";
import How from "./components/how/How";
import Join from "./components/join/Join";
import Navbar from "./components/navbar/Navbar";
import Post from "./components/post/Post";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Post />
      <Collection />
      <Beatiful />
      <Browse />
      <How />
      <Join />
      <Footer />
    </div>

  )
}

export default App



