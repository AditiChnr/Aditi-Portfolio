import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import StickerLayer from './components/StickerLayer'
import BubbleMenu from './components/BubbleMenu'
import Footer from './components/Footer'
import Home from './pages/Home'
import Travels from './pages/Travels'
import Hobbies from './pages/Hobbies'
import Music from './pages/Music'
import Achievements from './pages/Achievements'
import Traits from './pages/Traits'
import Education from './pages/Education'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <Nav />
      <StickerLayer />
      <BubbleMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/music" element={<Music />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/traits" element={<Traits />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer />
    </>
  )
}
