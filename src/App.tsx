import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { homeSections } from './config/navigation'
import Home from './pages/Home'
import BecomeMember from './pages/BecomeMember'
import Sponsors from './pages/Sponsors'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="become-a-member" element={<BecomeMember />} />
          <Route path="sponsors" element={<Sponsors />} />
          {homeSections.map(({ id, available }) => (
            <Route
              key={id}
              path={id}
              element={<Navigate to={available ? `/#${id}` : '/'} replace />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
