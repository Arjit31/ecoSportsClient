import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Coach from './pages/Coach/Coach'
import FindCoach from './pages/FindCoach/FindCoach'
import MyBatches from './pages/MyBatches/MyBatches'
import Topbar from './components/topBar/Topbar'
import Rooms from './pages/Rooms/Rooms'

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
          </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
