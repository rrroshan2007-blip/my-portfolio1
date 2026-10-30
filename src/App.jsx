import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import PortraitSpecimen from './components/PortraitSpecimen/PortraitSpecimen'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import WibzZite from './components/WibzZite/WibzZite'
import LearningExploring from './components/LearningExploring/LearningExploring'
import Contact from './components/Contact/Contact'
import { PrimaryFooter, SecondaryFooter } from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full text-on-surface">
          <Hero />
          <PortraitSpecimen />
          <About />
          <Skills />
          <Projects />
          <WibzZite />
          <LearningExploring />
          <Contact />
          <PrimaryFooter />
        </div>
      </main>
      <SecondaryFooter />
    </>
  )
}
