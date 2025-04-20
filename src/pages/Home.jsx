import Hero from "../components/Hero"
import Nav from "../components/Nav"
import Videos from "../components/Videos"
import Cta from "../components/Cta"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Nav />
      <div className="pt-20">
        <Hero></Hero>
        <Videos />
        <Cta></Cta>
      </div>
      <Footer />
    </>
  )
}

export default Home
