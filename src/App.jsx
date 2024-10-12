import { Landing } from './components/landing/Landing'
import { Routes,Route } from 'react-router'
import { UserProvider} from './pages/user/UserProvider'
import { HomeUser } from './components/user/HomeUser'
import { Layout } from './Layout'
import { Login } from './pages/login/Login'
import { NotFound } from './pages/notfound/NotFound'
import { userStorage } from './utils/storage/login/loginStorage'

function App() {
  const {roll} = userStorage()

  return (
    <Layout>
      <Routes>
        <Route path="/" element={roll ? <HomeUser /> : <Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={NotFound} />
        <Route path="/user" element={<UserProvider login={roll} />}>
          <Route path="home" element={<HomeUser />} />
          <Route path="ubicacion" element={<HomeUser />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App
