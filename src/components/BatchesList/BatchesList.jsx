import Batch from '../Batch/Batch';
import './BatchesList.css';

const batches = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Marathon Training',
    sports: 'Football',
    dateRange: 'Apr 25 - Aug 7',
    timing: '10:00'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'July Core Challenge',
    sports: 'Basketball',
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
          sports={batch.sports}
          dateRange={batch.dateRange}
          timing={batch.timing}
        />
      ))}
    </div>
  );
};

export default BatchesList;
