import Presentation from '../Components/home/Presentation'
import QuickAccess from '../Components/home/QuickAcess'
import RecentNews from '../Components/home/RecentNews'
import SliderHeroSection from '../Components/home/SliderHeroSection'
import UpcomingEvents from '../Components/home/UpcomingEvents'

function Home() {
  return (
    <main>
       <SliderHeroSection />
       <Presentation />
       <QuickAccess />
       <UpcomingEvents />
       <RecentNews />
    </main>
  )
}

export default Home