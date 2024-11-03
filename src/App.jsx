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
        {/* <FindCoach/> */}
        {/* <Coach/> */}
        <MyBatches/>
        {/* <Rooms/> */}
    </div>
  )
}

export default App
