import './Batch.css';

const Batch = ({ image, title,sports, dateRange, timing }) => {
  return (
    <div className="batch">
      <div className='container'>
        <img src={image} alt={title} className="batch-img" />
        <div className="batch-info">
          <h3>{title}</h3>
          <p>{sports}</p>
          <p>{dateRange}</p>
          <p>{timing}</p>
        </div>
      </div>
      <button className="unregister-btn">Leave Batch</button>
    </div>
  );
};

export default Batch;
