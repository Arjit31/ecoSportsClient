import Batch from '../Batch/Batch';
import './BatchesList.css';

const batches = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Marathon Training',
    dateRange: 'Apr 25 - Aug 7',
    timing: '10:00'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'July Core Challenge',
    dateRange: 'Jul 1 - Jul 31',
    timing: '13:00'
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
          timing={batch.timing}
        />
      ))}
    </div>
  );
};

export default BatchesList;
