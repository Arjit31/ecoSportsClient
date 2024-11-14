import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="https://via.placeholder.com/150" alt="BatchImg"/>
      <div className='row'>
        <h3>Batch1</h3>
        <p>No of Members</p>
      </div>
      <div className="row">
        <h3>Sports</h3>
        <p>Timings</p>
      </div>
      <textarea placeholder="Special Instructions" className="special-instructions" />
      <button className="unregister-btn">Unregister</button>
    </div>
  );
};

export default Sidebar;
