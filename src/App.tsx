import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import BecomeMember from './pages/BecomeMember'
import Sponsors from './pages/Sponsors'
import Events from './pages/Events'
import NotFound from './pages/NotFound'
import WhatWeDo from './pages/WhatWeDo'
import Initiatives from './pages/Initiatives'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="become-a-member" element={<BecomeMember />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="events" element={<Events />} />
          <Route path="what-we-do" element={<WhatWeDo />} />
          <Route path="initiatives" element={<Initiatives />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
