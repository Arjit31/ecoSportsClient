import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Coach from './pages/Coach/Coach'
import FindCoach from './pages/FindCoach/FindCoach'
import MyBatches from './pages/MyBatches/MyBatches'
import Topbar from './components/topBar/Topbar'
import Rooms from './pages/Rooms/Rooms'
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import SingleBatch from "./pages/SingleBatch/SingleBatch";
import ChatRoom from "./pages/ChatRoom/ChatRoom";
import Profile from "./pages/Profile/Profile";

function App() {

  return (
    <div className='mainScreen'>
      <Topbar/>
        {/* <Coach/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FindCoach />} />
            <Route path="/myBatches" element={<MyBatches />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/batch/:id" element={<SingleBatch />} />
            <Route path="/rooms/:id" element={<ChatRoom />} />
            <Route path="/user/:id" element={<Profile />} />
          </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
