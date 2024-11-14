import './topbar.css'

export default function Topbar() {
  return (
    <div className='topBar'>
        <nav className="navbar">
          <div className="logo">EcoSports</div>
          <div className="menu">
            <a href="/">Find Coach</a>
            <a href="/myBatches">My Batches</a>
            <a href="/rooms">Community</a>
            {/* <a href="#"><img src="profile_pic_url" alt="Profile" /></a> */}
            <a href='/login'><button className='loginButton'>Login</button></a>
            <a href='/register'><button className='registerButton'>Register</button></a>
          </div>
        </nav>
    </div>
  )
}
