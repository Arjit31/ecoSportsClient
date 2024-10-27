import './Batch.css';

const Batch = ({ image, title, dateRange }) => {
  return (
    <div className="batch">
      <img src={image} alt={title} className="batch-img" />
      <div className="batch-info">
        <h3>{title}</h3>
        <p>{dateRange}</p>
      </div>
      <button className="unregister-btn">Unregister</button>
    </div>
  );
};

export default Batch;
