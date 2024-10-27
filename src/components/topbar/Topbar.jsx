import './topbar.css'

export default function Topbar() {
  return (
    <div>
        <nav className="navbar">
          <div className="logo">RunIQ</div>
          <div className="menu">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">Challenges</a>
          <a href="#">My Progress</a>
          </div>
          <div className="profile-icon">
          <img src="profile_pic_url" alt="Profile" />
          </div>
        </nav>
    </div>
  )
}
