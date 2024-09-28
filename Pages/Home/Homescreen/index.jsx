import AboutMe from '../AboutMe'
import ContactMe from '../ContactMe'
import Herosection from '../Herosection'
import MySkills from '../MySkills'
import Myportfolio from '../Myportfolio'
import Footer from '../Footer'

export default function Home() {
  return (
    <>
      <Herosection />
      <MySkills />
      <AboutMe />
      <Myportfolio />
      <ContactMe />
      <Footer />
    </>
  )
}
