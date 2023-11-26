import HomePageForm from "./HomePageForm";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div>A Realtime collaborative whiteboard</div>
      <HomePageForm />
    </>
  );
}

export default Home;
