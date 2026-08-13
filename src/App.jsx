import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import HomePage from "./pages/home";
import RoomPage from "./pages/room";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/join" element={<HomePage />} />
      <Route path="/room/:roomCode" element={<RoomPage />} />
    </Routes>
  );
}

export default App;
