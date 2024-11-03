import './topbar.css'

export default function Topbar() {
  return (
    <div className='topBar'>
        <nav className="navbar">
          <div className="logo">EcoSports</div>
          <div className="menu">
            <a href="#">Community</a>
            <a href="#">Coaches</a>
            <a href="#">MyBatches</a>
            <a href="#"><img src="profile_pic_url" alt="Profile" /></a>
          </div>
        </nav>
    </div>
  )
}
