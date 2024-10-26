import { Landing } from "./components/landing/Landing";
import { Routes, Route } from "react-router";
import { UserProvider } from "./pages/user/UserProvider";
import { HomeUser } from "./components/user/cover/HomeUser";
import { Layout } from "./Layout";
import { Login } from "./pages/login/Login";
import { NotFound } from "./pages/notfound/NotFound";
import { Classes } from "./pages/clases/Classes";
import { useUserStorage } from "./utils/storage/login/useUserStorage";
import { Calendar } from "./components/calendar/Calendar";
import { ChatBot } from "./pages/chat/ChatBot";
import { Games } from "./pages/games/Games";
import { Informe } from "./pages/Informe";

function App() {
  const { login } = useUserStorage();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={login ? <HomeUser /> : <Landing />} />
        <Route path="/login" element={!login && <Login />} />
        <Route path="/" element={<UserProvider login={login} />}>
          <Route path="class" element={<Classes />} />
          <Route path="calendario" element={<Calendar />} />
          <Route path="games" element={<Games />} />
          <Route path="informes" element={<Informe />} />
          <Route path="chat" element={<ChatBot />} />
        </Route>
        <Route path="/*" element={NotFound} />
      </Routes>
    </Layout>
  );
}

export default App;
