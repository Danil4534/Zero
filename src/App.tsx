
import "./App.scss";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MeetOurTeam from "./components/MeetOurTeam/MeetOurTeam";
import OurService from "./components/ourService/OurService";
import Subscribe from "./components/Subscribe/Subscribe";
import Welcome from "./components/Welcome/Welcome";


function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Banner />
          <OurService />
          <Welcome />
          <MeetOurTeam />
          <Subscribe />
        </main >
        <Footer />
      </div>
    </>


  );
}

export default App;
