import { Landing } from "./components/landing/Landing";
import { Routes, Route } from "react-router";
import { UserProvider } from "./pages/user/UserProvider";
import { HomeUser } from "./components/user/cover/HomeUser";
import { Layout } from "./Layout";
import { Login } from "./pages/login/Login";
import { NotFound } from "./pages/notfound/NotFound";
import { useUserStorage } from "./utils/storage/login/useUserStorage";

function App() {
  const { login } = useUserStorage();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={login ? <HomeUser /> : <Landing />} />
        <Route path="/login" element={!login && <Login />} />
        <Route path="/*" element={NotFound} />
        <Route path="/user" element={<UserProvider login={login} />}>
          <Route path="home" element={<HomeUser />} />
          <Route path="ubicacion" element={<HomeUser />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
