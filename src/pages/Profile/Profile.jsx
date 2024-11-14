import { useState, useEffect } from 'react';
import './Profile.css'; // Create this CSS file for styling
// import profilePic from './default-profile.png'; // Placeholder profile image, replace with actual profile image URL if available

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend API
    // Replace '/api/user' with your actual endpoint
    fetch('/api/user')
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

//   if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={"https://via.placeholder.com/150"} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.type}</p> {/* Assuming 'type' is a designation or title */}
          <button className="edit-profile-btn">Edit profile</button>
        </div>
      </div>
      <div className="profile-section">
        <h3>About</h3>
        <p>Tell us a little about yourself</p>
        <button className="add-btn">Add bio</button>
      </div>
      <div className="profile-section">
        <h3>Contact</h3>
        <p>Add contact details so friends can find you</p>
        <button className="add-btn">Add contact</button>
      </div>
      <div className="profile-section">
        <h3>Email</h3>
        <p>{user.email}</p>
        <button className="add-btn">Add email</button>
      </div>
    </div>
  );
};

export default Profile;
