import BatchesList from '../../components/BatchesList/BatchesList';
import './MyBatches.css';

const MyBatches = () => {
  return (
    <div className="page-layout">
      <div className="batches-section">
        <h2>My Batches</h2>
        <BatchesList />
      </div>
    </div>
  );
};

export default MyBatches;
