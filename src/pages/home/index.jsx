import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Category from './Category'
import Hero from './Hero'
import SocialMedia from './SocialMedia'
import Trending from './Trending'

function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main
        className="flex-1 px-14 max-[1100px]:px-8 max-[640px]:px-5"
        aria-label="Home content"
      >
        <Hero />
        <Category />
        <Trending />
        <SocialMedia />
      </main>
      <Footer />
    </div>
  )
}

export default Home
