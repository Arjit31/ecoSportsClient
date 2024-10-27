import Batch from '../Batch/Batch';
import './BatchesList.css';

const batches = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Marathon Training',
    dateRange: 'Apr 25 - Aug 7'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'July Core Challenge',
    dateRange: 'Jul 1 - Jul 31'
  }
];

const BatchesList = () => {
  return (
    <div className="batches-list">
      {batches.map((batch, index) => (
        <Batch
          key={index}
          image={batch.image}
          title={batch.title}
          dateRange={batch.dateRange}
        />
      ))}
    </div>
  );
};

export default BatchesList;
